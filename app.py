from flask import Flask, render_template, request, jsonify
import sqlite3
import os
import smtplib
import threading
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

def get_db_connection():
    # Make sure we connect to the db in the same directory
    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database.db')
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn

def send_email_notification(name, user_email, message):
    sender_email = "narendra1jagtap@gmail.com"  # Your email address
    # IMPORTANT: You need a 16-character App Password from your Google Account settings, not your actual password!
    sender_password = os.environ.get('EMAIL_APP_PASSWORD', 'YOUR_APP_PASSWORD_HERE')
    
    if sender_password == 'YOUR_APP_PASSWORD_HERE':
        print("Skipping email: Please configure your EMAIL_APP_PASSWORD in app.py to receive emails.")
        return

    receiver_email = "narendra1jagtap@gmail.com"  # The email address that will receive the notification
    
    msg = MIMEMultipart()
    msg['From'] = f"Portfolio Contact <{sender_email}>"
    msg['To'] = receiver_email
    msg['Subject'] = f"New Portfolio Message from {name}"
    
    body = f"You received a new message from your portfolio website!\n\nName: {name}\nEmail: {user_email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        print("Email notification sent successfully!")
    except Exception as e:
        print(f"Failed to send email notification: {e}")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({'error': 'Missing data'}), 400
        
    try:
        conn = get_db_connection()
        conn.execute('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
                     (name, email, message))
        conn.commit()
        conn.close()
        
        # Send an email asynchronously via a background thread to avoid slowing down the response
        threading.Thread(target=send_email_notification, args=(name, email, message)).start()
        
        return jsonify({'status': 'success', 'message': 'Message received!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
