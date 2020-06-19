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
  res.render('./swipe.ejs', {data: users[0]});
});

// na elke swipe bijhouden
router.post('/swipe', async (req, res) => {
  const users = await db
      .get()
      .collection('user')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();
  index++;
  console.log(users[0]);

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
      }
    });
    const checklike = await db
        .get()
        .collection('user')
        // eslint-disable-next-line max-len
        .find({_id: objectId(users[index -1]._id), likes: objectId(req.session.user._id)})
        .toArray();

    console.log(checklike);
    if (checklike && checklike.length > 0) {
      // eslint-disable-next-line max-len
      console.log(`IT IS A MATCH BETWEEN: ${req.session.user._id} AND ${users[index-1]._id}`);
    }
  } else {
    // Als je wil kun je hier de dislikes bijhouden
  }

  console.log(users.length + 'Dit is de lengte');
  if (index == users.length) {
    console.log('dit is het einde');
    index = 0;
  }
  res.render('./swipe.ejs', {data: users[index]});
});

module.exports = router;
