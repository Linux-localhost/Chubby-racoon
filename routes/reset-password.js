const express = require('express');
const router = express.Router();


router.get('/forgot', (req, res) => {
  res.render('reset-password.ejs');
});


router.post('/reset', (req, res) => {
});

module.exports = router;
