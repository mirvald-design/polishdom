from flask import Flask, request
import requests

app = Flask(__name__)


@app.route('/send', methods=['POST'])
def send_to_telegram():
    # Get the user's name, email, and phone number from the form submission
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']

    # Set your bot's API token and chat ID
    api_token = "5888482946:AAH48A_SlXa1XvJlnOPkPcXdOFwCdjHzwF8"
    chat_id = "-1001707722226"

    # Build the message to send to the bot
    message = f"New contact form submission: \n\nName: {name} \nEmail: {email} \nPhone: {phone}"

    # Send the message to the bot
    send_message = requests.post(f"https://api.telegram.org/bot{api_token}/sendMessage", data={
        "chat_id": chat_id,
        "text": message
    })

    if send_message.status_code == 200:
        # Message was successfully sent
        return "Thank you for contacting us! We will get back to you soon."
    else:
        # There was an error sending the message
        return "Oops, something went wrong. Please try again later."


if __name__ == '__main__':
    app.run()
