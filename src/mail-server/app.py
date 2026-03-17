from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

app = Flask(__name__)

ALLOWED_ORIGINS = ["https://portfolio-lilac-psi-20.vercel.app"]
CORS(app, resources={r"/api/*": {"origins": ALLOWED_ORIGINS}})

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')

mail = Mail(app)


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(silent=True)

    if not data:
        return jsonify({'error': 'Invalid JSON request'}), 400

    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message_body = data.get('message')

    if not all([name, email, subject, message_body]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        msg = Message(
            subject=f"Portfolio Contact: {subject}",
            recipients=[os.environ.get('MAIL_USERNAME')],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_body}",
            reply_to=email  
        )
        mail.send(msg)
        return jsonify({'success': 'Message sent successfully!'}), 200
    except Exception as e:
        print(f"Server Error: {e}")
        return jsonify({'error': 'Failed to send message.'}), 500


if __name__ == '__main__':
    app.run(port=5000)
