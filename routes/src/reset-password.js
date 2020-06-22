const express = require('express');
const router = express.Router();
const db = require('../../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;
const bcrypt = require('bcrypt');
const saltRounds = 10;
let token;

router.get('/reset/:token', async (req, res) => {
  token = req.params.token;

  const lookup = await db.get().collection('user').findOne({
    '_id': objectId(token),
    'reqreset': true,
  });

  if (lookup) {
    res.render('reset-password.ejs');
  } else {
    res.redirect('/forgot');
  }
});

router.post('/updatepassword', async (req, res) => {
  const password = req.body.password;
  const repeat = req.body.repeat_password;

  if (password !== repeat) {
    req.flash('error', 'Passwords are not the same');
    res.redirect('/reset/' + token);
    return;
  }
  const passwordHash = bcrypt.hashSync(password, saltRounds);
  const updateUser = await db.get().collection('user').updateOne({
    '_id': objectId(token),
  }, {
    $set: {
      'reqreset': false,
      'password': passwordHash,
    },
  });

  if (updateUser) {
    req.flash('succes', 'Passwords have been resetted');
    res.redirect('/inloggen');
  } else {
    req.flash('error', 'Something went wrong');
    res.redirect('/inloggen');
  }
});

module.exports = router;
