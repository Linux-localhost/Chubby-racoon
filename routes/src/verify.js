const express = require('express');
const router = express.Router();
const db = require('../../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;

router.get('/verify/:token', async (req, res) => {
  const token = req.params.token;
  const updateUser = await db.get().collection('user').updateOne({
    '_id': objectId(token),
  }, {
    $set: {
      'verified': true,
    },
  });

  if (updateUser) {
    req.flash('succes', 'Your account has been activated');
    res.redirect('/inloggen');
  } else {
    req.flash('error', 'Something went wrong');
    res.redirect('/inloggen');
  }
});
module.exports = router;
