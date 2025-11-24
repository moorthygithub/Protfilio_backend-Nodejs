// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// module.exports = transporter;
// transporter.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // TLS port
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // App password
  },
  tls: {
    rejectUnauthorized: false, // important for some cloud servers
  },
  connectionTimeout: 20000, // 20 seconds
  greetingTimeout: 20000,
  socketTimeout: 20000,
  debug: true, // logs SMTP activity
});

module.exports = transporter;
