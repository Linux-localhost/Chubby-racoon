const express = require('express');
const router = express.Router();
const db = require('../helper/database');

router.get('/users', (req, res) => {
  db.get()
    .collection('user')
    .find({})
    .toArray()
    .then((users) => {
      console.log('users', users);
    });
});

module.exports = router;