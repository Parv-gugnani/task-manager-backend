const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "9765.parv@Gmail.com",
    subject: "Thanks for joining in!🙉",
    text: `Welcome to the app, ${name}. Let me know how you get alon with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "9765.parv@Gmail.com",
    subject: "Mujhe chod jo tum jaoge bada tadpaoge 😭",
    text: `Goodbye, ${name}. See you soon!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
