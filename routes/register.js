const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: '',
  subject: 'Activation of your account',
  text: '',
};


router.get('/registeren', (req, res) => {
  res.render('registeren.ejs');
});


router.post('/register', async (req, res) => {
  let emailtoken;
  const createUsername = req.body.name;
  const createEmail = req.body.email.toLowerCase();
  const createPassword = req.body.password;
  const createPassword2 = req.body.password_repeat;

  if (createPassword !== createPassword2) {
    req.flash('error', 'Passwords are not the same');
    res.redirect('/registeren');
    return;
  }
  const user = await db.get().collection('user').findOne({email: createEmail});

  if (user) {
    req.flash('error', 'Email already exist');
    res.redirect('/registeren');
    return;
  } else {
    const passwordHash = await bcrypt.hashSync(req.body.password, saltRounds);
    const insertuser = await db.get().collection('user').insertOne({
      'username': createUsername,
      'password': passwordHash,
      'email': createEmail,
      'gender': '',
      'age': Math.floor(Math.random() * 30) + 20,
      'city': '',
      'characteristics': [],
      'picture': 'stock.png',
      'likes': [],
      'verified': false,
      'reqreset': false,
    });
    emailtoken = insertuser.ops[0]._id;
  }
  mailOptions.to = createEmail;
  mailOptions.text = `Please click the link below http://localhost:3000/verify/${emailtoken}`;
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) console.log(err);
    console.log(`Email sent to: ${mailOptions.to}`);
    return;
  });
  req.flash('succes', `We've sent you an email to verify your account`);
  console.log(`A new user has registered #awesome! : ${req.body.email}`);
  res.redirect('/inloggen');
});


module.exports = router;
