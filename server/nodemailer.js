const gmail = require('../config')

module.exports = {

    contactMe(req, res) {
        const { name, email, subject, message } = req.body

        const nodemailer = require('nodemailer');

        var user = gmail.user;
        var pass = gmail.password;

        if (process.env.NODE_ENV === 'production') { // for deployment, use the environment variables on Heroku
          user = process.env.user;
          pass = process.env.password
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: name,
            to: gmail.user,
            subject: `From ${name} (${email}) re: ${subject}`,
            text: message
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) { res.send('Sorry, there was an error sending your message.  Please try again.') }
            else { res.send('Message sent successfully!') }
        })
    }
}