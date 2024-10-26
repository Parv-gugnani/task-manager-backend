const emailjs = require("emailjs");

require("dotenv").config();

const server = emailjs.server.connect({
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  host: process.env.EMAIL_HOST,
  ssl: true,
});

const sendWelcomeEmail = (email, name) => {
  const message = {
    from: "Parv Gugnani <9765.parv@gmail.com>",
    to: `${name} <${email}>`,
    subject: "Thanks for joining in!🙉",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    attachment: [
      {
        data: `<html>Welcome to the app, ${name}. Let me know how you get along with the app.</html>`,
        alternative: true,
      },
    ],
  };

  server.send(message, (err, message) => {
    if (err) {
      console.log("Error sending welcome email:", err);
    } else {
      console.log("Welcome email sent:", message);
    }
  });
};

const sendCancelEmail = (email, name) => {
  const message = {
    from: "Parv Gugnani <9765.parv@gmail.com>",
    to: `${name} <${email}>`,
    subject: "Mujhe chod ke jo tum jaoge bada tadpaoge 😭",
    text: `Goodbye, ${name}. See you soon!`,
    attachment: [
      {
        data: `<html>Goodbye, ${name}. See you soon!</html>`,
        alternative: true,
      },
    ],
  };

  server.send(message, (err, message) => {
    if (err) {
      console.log("Error sending cancellation email:", err);
    } else {
      console.log("Cancellation email sent:", message);
    }
  });
};

// Test the function
sendWelcomeEmail("parv18788@gmail.com", "parv");

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
