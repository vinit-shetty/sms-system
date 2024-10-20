const express = require('express');
const twilio = require('twilio');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Twilio client with your credentials
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

//starts from public folder
app.use(express.static('public'));

// Route to send SMS
app.post('/send-sms', (req, res) => {
  const { to, message } = req.body;

  client.messages
    .create({
      body: message,              // The message to be sent
      from: process.env.TWILIO_PHONE_NUMBER,  // Your Twilio phone number
      to: to                       // The recipient's phone number
    })
    .then(message => res.status(200).send(`Message sent with SID: ${message.sid}`))
    .catch(error => res.status(500).send(error));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
