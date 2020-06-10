const express = require('express');
const router = express.Router();
const db = require('../helper/database');

// Registeren
router.get('/registeren', (req, res) => {
  res.render('registeren.ejs');
});


router.post('/register', (req, res) => {
  const createUsername = req.body.name;
  const createEmail = req.body.email.toLowerCase();
  const createPassword = req.body.password;
  const createPassword2 = req.body.password_repeat;

  db.get().collection('user').findOne({
    email: createEmail,
  },
  (err, user) => {
    if (err) console.log(err);
    if (user) {
      console.log('Email already exist please try a diffrent one');
      res.redirect('/registeren');
    } else if (createPassword == createPassword2) {
      db.get().collection('user').insertOne({
        'username': createUsername,
        'password': createPassword,
        'email': createEmail,
        'gender': '',
        'age': Math.floor(Math.random() * 30) + 20,
        'city': '',
        'characteristics': [],
        'picture': 'stock.png',
        'likes': {},
      });
      console.log(`A new user has registered #awesome! : ${req.body.email}`);
      res.redirect('/inloggen');
    } else {
      console.log('Passwords are not the same');
      res.redirect('/registeren');
    }
  });
});


module.exports = router;
