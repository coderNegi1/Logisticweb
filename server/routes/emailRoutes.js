const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-inquiry', async (req, res) => {
  const { name, email, mobile, freight, specialNote } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or your SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
    rejectUnauthorized: false, // 👈 This allows self-signed certs
  },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Inquiry Submitted',
    html: `
      <h3>New Inquiry Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Freight Type:</strong> ${freight}</p>
      <p><strong>Special Note:</strong><br>${specialNote}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
