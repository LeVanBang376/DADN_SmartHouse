const nodemailer = require("nodemailer");

async function sendEmail(title, content) {
    // Get title and content from command line arguments

    console.log(title, content);

    // Async function enables allows handling of promises with await

    // First, define send settings by creating a new transporter: 
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 465, // Port for SMTP (usually 465)
        secure: true, // Usually true if connecting to port 465
        auth: {
            user: "thuyenthuyen123123@gmail.com", // Your email address
            pass: "dreqiafysnwxxzxp", // Password (for gmail, your app password)
            // ⚠️ For better security, use environment variables set on the server for these values when deploying
        },
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
        from: '"You" <***-example-person@gmail.com>',
        to: "thuyen.nguyennmt942@hcmut.edu.vn",
        subject: title, // Use title passed from command line arguments
        html: content, // Use content passed from command line arguments
    });

    console.log(info.messageId);
    // Random ID generated after successful send (optional)
    // abc.js

    console.log(`Title: ${title}`);
    console.log(`Content: ${content}`);

}

sendEmail()
    .catch(err => console.log(err));