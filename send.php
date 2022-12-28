<?php

// Get the user's name, email, and phone number from the request body
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];

// Set your bot's API token and chat ID
$api_token = "5888482946:AAH48A_SlXa1XvJlnOPkPcXdOFwCdjHzwF8";
$chat_id = "1001707722226";

// Build the message to send to the bot
$message = "New contact form submission: \n\nName: $name \nEmail: $email \nPhone: $phone";

// Send the message to the bot
$send_message = curl_init("https://api.telegram.org/bot$api_token/sendMessage");
curl_setopt($send_message, CURLOPT_POST, 1);
curl_setopt($send_message, CURLOPT_POSTFIELDS, "chat_id=$chat_id&text=$message");
curl_setopt($send_message, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($send_message);
curl_close($send_message);

if ($response === "\"OK\"") {
  // Message was successfully sent
  http_response_code(200);
} else {
  // There was an error sending the message
  http_response_code(500);
}

?>
