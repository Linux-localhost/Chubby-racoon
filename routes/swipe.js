const express = require('express');
const router = express.Router();


router.get('/swipe', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    res.render('swipe', {
      data: req.session.user,
    });
  } else res.redirect('/inloggen');
});

module.exports = router;
