const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { title, content } = req.body;

  try {
    // Tạo một transporter để gửi email
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "thuyenthuyen123123@gmail.com",
          pass: "dreqiafysnwxxzxp",
        },
      });

    // Tạo một email message
    const message = {
        from: '"You" <***-example-person@gmail.com>',
        to: "thuyen.nguyennmt942@hcmut.edu.vn",
        subject: title,
        html: content,
    };

    // Gửi email
    const info = await transporter.sendMail(message);

    console.log('Email sent:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
