from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)  


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'muhammadirfank2007@gmail.com' 
app.config['MAIL_PASSWORD'] = '*********'
app.config['MAIL_DEFAULT_SENDER'] = 'muhammadirfank2007@gmail.com'

mail = Mail(app)


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message_body = data.get('message')

    if not all([name, email, subject, message_body]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        msg = Message(
            subject=f"Portfolio Contact: {subject}",
            recipients=['muhammadirfank2007@gmail.com'],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_body}"
        )
        mail.send(msg)
        return jsonify({'success': 'Message sent successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
