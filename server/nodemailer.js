module.exports = {

    contactMe(req, res) {
        const { name, email, subject, message } = req.body

        const nodemailer = require('nodemailer');

        let user = process.env.GMAILUSER;
        let pass = process.env.GMAILPASSWORD;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: name,
            to: user,
            subject: `From ${name} (${email}) re: ${subject}`,
            text: message
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) { res.send('Sorry, there was an error sending your message.  Please try again.') }
            else { res.send('Message sent successfully!') }
        })
    }
}