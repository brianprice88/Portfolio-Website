const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');

const nodeMailer = require('./nodemailer.js')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))

app.post('/', nodeMailer.contactMe);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, () => console.log(`listening at port ${PORT}!`))