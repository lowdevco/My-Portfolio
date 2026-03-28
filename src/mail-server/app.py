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


ALLOWED_ORIGINS = [
    "https://portfolio-lilac-psi-20.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:8080",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173"
]

CORS(app, resources={r"/api/*": {"origins": ALLOWED_ORIGINS}})

app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME=os.environ.get('MAIL_USERNAME'),
    MAIL_PASSWORD=os.environ.get('MAIL_PASSWORD'),
    MAIL_DEFAULT_SENDER=os.environ.get('MAIL_USERNAME')
)

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
            recipients=[app.config['MAIL_USERNAME']],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_body}",
            reply_to=email
        )
        mail.send(msg)
        return jsonify({'success': 'Message sent successfully!'}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to send message.'}), 500


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
