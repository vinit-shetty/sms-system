# SMS Notification System with Twilio

This project is a web-based SMS notification system that allows users to send SMS messages to any phone number using the Twilio API. It includes a form where the user enters the recipient's phone number and a custom message. The backend server, built with Node.js and Express, sends the message using Twilio's messaging service.

**Features:**
- Send SMS messages via a web interface
- Backend powered by Express.js and Twilio's API
- Uses environment variables for secure configuration

**Technologies used:**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: Twilio SMS API
- **Environment Management**: dotenv

**To set up and run the project:**

1. Clone the repository:
   `git clone https://github.com/vinit-shetty/sms-notification-system.git`

2. Navigate into the project directory:
   `cd sms-notification-system`

3. Install dependencies:
   `npm install`

4. Create a `.env` file in the root directory with the following content:
   `TWILIO_ACCOUNT_SID=your_twilio_account_sid`
   `TWILIO_AUTH_TOKEN=your_twilio_auth_token`
   `TWILIO_PHONE_NUMBER=your_twilio_phone_number`


5. Start the server:
`node index.js`

6. Open your browser and go to `http://localhost:3000`.

**Usage:**
- Input the recipient's phone number and message in the form.
- Click "Send SMS" to send the message using Twilio.

