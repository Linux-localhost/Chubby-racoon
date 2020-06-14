const express = require('express');
const router = express.Router();
const db = require('../helper/database');


router.get('/inloggen', (req, res) => {
  res.render('inloggen.ejs');
});


router.post('/login', async (req, res) => {
  const username = req.body.email.toLowerCase();
  const password = req.body.password;

  const validate = await db.get().collection('user').findOne({email: username, password: password});

  if (validate && !validate.verified) {
    req.session.user = validate;
    req.session.save(function(err) {
      res.redirect('/swipe');
      return;
    });
  } else {
    req.flash('error', 'incorrect or account not verified');
    res.redirect('/inloggen');
  }
});
module.exports = router;
