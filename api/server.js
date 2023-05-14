const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const formData = require('express-form-data');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

app.post('/', (req, res) => {
    const { body: { fullName = '', email = '', title = '', message = ''  } = {} } = req;

    for (const [key, value] of Object.entries(req.body)) {
        if (key !== 'fullName' && key !== 'email' && key !== 'title' && key !== 'message') {
            res.status(400).json({ message: 'Invalid request!' });
            return;
        }

        if (value === '') {
            res.status(400).json({ message: 'Please fill out all fields!' });
            return;
        }
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        res.status(400).json({ message: 'Invalid Email format!' });
        return;
    }

    const mailOptions = {
        from: `${fullName} <${process.env.MAIL_USERNAME}>`,
        to: 'g.nikoladze13@gmail.com',
        subject: title,
        text: `Email: ${email} \nMessage: ${message}`,
        html: `
            <h3>${email}</h3>
            <p>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log("Error " + err);
        } else {
            res.status(200).json({
                message: 'Email was sent successfully!'
            });
        }
    });
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
