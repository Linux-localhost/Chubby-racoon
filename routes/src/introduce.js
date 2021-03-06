const express = require('express');
const router = express.Router();
const db = require('../../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;


router.get('/introduce', async (req, res) => {
  const id = req.session.user._id;

  // eslint-disable-next-line max-len
  const lookup = await db.get().collection('first-login').findOne({'_id': objectId(id)});

  if (lookup && req.session.user) {
    res.render('introduce.ejs');
  } else if (!lookup && req.session.user) {
    res.redirect('/swipe');
  } else {
    res.redirect('/inloggen');
  }
});

router.post('/signup', async (req, res) => {
  const id = req.session.user._id;
  const gender = req.body.Gender;
  const age = req.body.Age;
  const city = req.body.City;

  // eslint-disable-next-line max-len
  if (gender == '' || gender == null || age == '' || age == null || city == '' || city == null) {
    req.flash('error', 'Please fill in the forms correctly');
    res.redirect('/introduce');
    return;
  }

  const updateUser = await db.get().collection('user').updateOne({
    '_id': objectId(id),
  }, {
    $set: {
      'gender': gender,
      'age': age,
      'city': city,
    },
  });

  if (updateUser) {
    await db.get().collection('first-login').deleteOne({
      '_id': objectId(req.session.user._id),
      'email': req.session.user.email,
    });
    res.redirect('/swipe');
  } else {
    req.flash('error', 'Sonething went wrong');
    res.redirect('/introduce');
  }
});


module.exports = router;
