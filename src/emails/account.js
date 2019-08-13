const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eugene@michasiw.com',
    subject: 'Thanks for signing up!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eugene@michasiw.com',
    subject: 'Why did you go?',
    text: `Goodbye ${name}. We're sorry to see you go – is there anything we could have done differently?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
