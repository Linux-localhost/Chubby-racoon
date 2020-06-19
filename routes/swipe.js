const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;


let index = 0;
// eerste keer van het laden van de pagina
router.get('/swipe', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/inloggen');
  }
  const users = await db
      .get()
      .collection('user')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();

  console.log('You are logged in as: ' + req.session.user.username);
  res.render('./swipe.ejs', {data: users[index]});
});

// na elke swipe bijhouden
router.post('/swipe', async (req, res) => {
  const users = await db
      .get()
      .collection('user')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();
  index ++;
  if (index == users.length) {
    index = 1;
  }
  console.log(index);

  if (req.body.liking == 1 || req.body.liking == 2) {
    await db.get().collection('user').updateOne({
      '_id': objectId(req.session.user._id),
    }, {
      $push: {
        likes: users[index -1]._id,
      },
    }, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log('Gelukt');
        console.log('Mission accomplisched');
      }
    });
  } else {
    // Als je wil kun je hier de dislikes bijhouden
  }

  const checklike = await db
      .get()
      .collection('user')
      .find({_id: objectId(users[index -1]._id), likes: [objectId(req.session.user._id)]})
      .toArray();

  if (checklike && checklike.length > 0) {
    console.log(`IT IS A MATCH BETWEEN: ${req.session.user._id} AND ${users[index-1]._id}`);
  }

  res.render('./swipe.ejs', {data: users[index]});
});

module.exports = router;
