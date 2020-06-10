const express = require('express');
const router = express.Router();
const db = require('../helper/database');

router.get('/inloggen', (req, res) => {
  res.render('inloggen.ejs');
});


router.post('/login', (req, res) => {
  const username = req.body.email.toLowerCase();
  const password = req.body.password;

  db.get().collection('user').findOne({
    email: username,
    password: password,
  }, (err, result) => {
    if (err) console.log(err);
    if (result) {
      req.session.user = result;
      console.log(req.session.user);
      req.session.save(function(err) {
        res.redirect('/profile');
      });
    } else {
      console.log('Account not found');
      res.redirect('/inloggen');
    }
  });
});
module.exports = router;
