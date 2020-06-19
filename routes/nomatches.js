const express = require('express');
const router = express.Router();

router.get('/nomatches', (req, res) => {
  res.render('nomatches.ejs');
});

module.exports = router;
