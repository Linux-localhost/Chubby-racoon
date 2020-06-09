const express = require('express');
const router = express.Router();



router.get('/inloggen', (req, res) => {
  res.render('inloggen.ejs');
});

module.exports = router;