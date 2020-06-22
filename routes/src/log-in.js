const express = require('express');
const router = express.Router();
const db = require('../../helper/database');
const bcrypt = require('bcrypt');


router.get('/inloggen', (req, res) => {
  res.render('inloggen.ejs');
});


router.post('/login', async (req, res) => {
  let username = req.body.email;
  const password = req.body.password;
  let compareSalt;

  // eslint-disable-next-line max-len
  if (username == '' || username == null || password == '' || password == null) {
    req.flash('error', 'incorrect or account not verified');
    res.redirect('/inloggen');
    return;
  }

  username = username.toLowerCase();
  const validate = await db.get().collection('user').findOne({email: username});
  // eslint-disable-next-line max-len
  const firstlogin = await db.get().collection('first-login').findOne({email: username});
  if (validate) {
    compareSalt = await bcrypt.compare(password, validate.password);
    if (!validate.verified) {
      req.flash('error', 'incorrect or account not verified');
      res.redirect('/inloggen');
    } else if (compareSalt && firstlogin) {
      req.session.user = validate;
      req.session.save(function(err) {
        res.redirect('/introduce');
        return;
      });
    } else if (compareSalt && !firstlogin) {
      req.session.user = validate;
      req.session.save(function(err) {
        res.redirect('/swipe');
        return;
      });
    } else {
      req.flash('error', 'incorrect or account not verified');
      res.redirect('/inloggen');
    }
  } else {
    req.flash('error', 'incorrect or account not verified');
    res.redirect('/inloggen');
  }
});
module.exports = router;
