const express = require('express');
const router = express.Router();

router.get('/notification', (req, res) => {
  res.render('notification.ejs');
});

module.exports = router;
