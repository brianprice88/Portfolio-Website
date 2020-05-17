const gmail = require('../config')

module.exports = {

    contactMe(req, res) {
        const { name, email, subject, message } = req.body

        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmail.user,
                pass: gmail.password
            }
        });

        const mailOptions = {
            from: name, // gmail automatically changes 'from' address to authenticated address
            to: gmail.user,
            subject: `[PORTFOLIO SITE] From ${email} re: ${subject}`,
            text: message
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) { console.error(err) }
            else { res.send('success') }
        })

    }

}