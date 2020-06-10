const express = require('express');
const router = express.Router();


router.get('/swipe', (req, res) => {
  res.render('swipe.ejs');
});

module.exports = router;
