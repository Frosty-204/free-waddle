const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const smtpTransport = require('nodemailer/lib/smtp-transport');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `tours <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // In production, configure your actual email service provider
      // For DebugMail, provide your DebugMail SMTP configuration
      return nodemailer.createTransport(
        // eslint-disable-next-line new-cap
        new smtpTransport({
          host: 'app.debugmail.io',
          port: 25,
          auth: {
            user: process.env.DEBUGMAIL_SMTP_USERNAME,
            pass: process.env.DEBUGMAIL_SMTP_PASSWORD,
          },
          // SMTPTransport({
          //   host: process.env.DEBUGMAIL_SMTP_HOST,
          //   port: process.env.DEBUGMAIL_SMTP_PORT,
          //   secure: false, // true for 465, false for other ports
          //   auth: {
          //     user: process.env.DEBUGMAIL_SMTP_USERNAME,
          //     pass: process.env.DEBUGMAIL_SMTP_PASSWORD,
          //   },
          // }),
        }),
      );
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      },
    );

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)',
    );
  }
};

// nodemailer.createTransport(SMTPTransport())
