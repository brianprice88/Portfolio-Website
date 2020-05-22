const gmail = require('../config')

module.exports = {

    contactMe(req, res) {
        const { name, email, subject, message } = req.body

        const nodemailer = require('nodemailer');

        let user = gmail.user;
        let pass = gmail.password;

        if (NODE_ENV='production') { // for Heroku deployment, use the environment variables from there
          user = process.env.user;
          password = process.env.password
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