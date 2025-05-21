const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-inquiry', async (req, res) => {
  const { name, email, mobile, freight, specialNote } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'negiprashant857@gmail.com',        // ✅ Replace with your Gmail
        pass: 'zprh ynvt avcx pfsg'            // ✅ Use App Password
      }
    });

    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',            // ✅ Receiver email
      subject: 'New Inquiry Received',
      html: `
        <h2>Inquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Freight:</strong> ${freight}</p>
        <p><strong>Special Note:</strong> ${specialNote}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Inquiry sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
