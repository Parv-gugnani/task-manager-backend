const { MailerSend, Recipient, EmailParams } = require("mailersend");

require("dotenv").config();

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

const sendWelcomeEmail = (email, name) => {
  const recipients = [new Recipient(email, name)];

  const emailParams = new EmailParams()
    .setFrom("9765.parv@gmail.com")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Thanks for joining in!🙉")
    .setHtml(
      `Welcome to the app, ${name}. Let me know how you get along with the app.`
    )
    .setText(
      `Welcome to the app, ${name}. Let me know how you get along with the app.`
    );

  mailersend.send(emailParams);
};

const sendCancelEmail = (email, name) => {
  const recipients = [new Recipient(email, name)];

  const emailParams = new EmailParams()
    .setFrom("9765.parv@gmail.com")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Mujhe chod ke jo tum jaoge bada tadpaoge 😭")
    .setHtml(`Goodbye, ${name}. See you soon!`)
    .setText(`Goodbye, ${name}. See you soon!`);

  mailersend.send(emailParams);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
