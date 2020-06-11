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
      req.session.save(function(err) {
        res.redirect('/swipe');
      });
    } else {
      req.flash('error', 'Account not found please try again');
      res.redirect('/inloggen');
    }
  });
});
module.exports = router;
