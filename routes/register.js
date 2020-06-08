const express = require('express');
const router = express.Router();

// Registeren
router.get('/registeren', (req, res) => {
  res.render('registeren.ejs');
});

module.exports = router;
