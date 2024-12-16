import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // TLS port
    secure: false, // Must be false for TLS
    requireTLS: true, // Enforces TLS connection
    auth: {
      user: process.env.GMAIL_USER, // Gmail account
      pass: process.env.GMAIL_APP_PASSWORD, // App Password for Gmail
    },
  });

  const options = {
    from: `"Jayesh's Auction Team" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(options);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};