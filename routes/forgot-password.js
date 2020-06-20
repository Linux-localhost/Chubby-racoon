const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const nodemailer = require('nodemailer');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;

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
  subject: 'Reset your password',
  text: '',
};


router.get('/forgot', (req, res) => {
  res.render('forgot-password.ejs');
});


router.post('/reset', async (req, res) => {
  const email = req.body.email.toLowerCase();
  const lookup = await db.get().collection('user').findOne({
    email: email,
  });
  if (lookup) {
    const id = lookup._id;
    await db.get().collection('user').updateOne({
      '_id': objectId(id),
    }, {
      $set: {
        'reqreset': true,
      },
    });
    mailOptions.to = email;
    // mailOptions.text = `Please click the link below http://localhost:3000/reset/${id}`;
    mailOptions.text = `Please click the link below https://the-relation-ship.herokuapp.com/reset/${id}`;
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) console.log(err);
      console.log(`Email sent to: ${mailOptions.to}`);
    });
  }
  req.flash('succes', `We've sent an email to reset your password`);
  res.redirect('/forgot');
});


module.exports = router;
