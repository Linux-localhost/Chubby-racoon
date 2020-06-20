const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;


let index = 0;
// first time loading the page
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

// keeps track off every swipe and goes to the next
router.post('/swipe', async (req, res) => {
  const users = await db
      .get()
      .collection('user')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();
  index++;

  // if you superliked(1) or liked(2) that person, it will be saved
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
        console.log('It works!');
      }
    });
    const checkLike = await db
        .get()
        .collection('user')
        // eslint-disable-next-line max-len
        .find({_id: objectId(users[index -1]._id), likes: objectId(req.session.user._id)})
        .toArray();

    // checks if they liked you to
    if (checkLike && checkLike.length > 0) {
      // eslint-disable-next-line max-len
      console.log(`You have a match with: ` + `${users[index-1].username}` + ' ' + `${users[index-1]._id}`);
      res.render('./notification.ejs', {data: users[index -1]});
      return;
    }
    // if you disliked(0) that person, it will be saved
  } else {
    await db.get().collection('user').updateOne({
      '_id': objectId(req.session.user._id),
    }, {
      $push: {
        dislikes: users[index -1]._id,
      },
    }, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log('Not your type off person');
      }
    });
  }

  // checks if you reaced the end of all the users
  if (index == users.length) {
    console.log('There are no new matches coming, you have reached the end');
    index = 0;
    res.render('./nomatches.ejs', {data: users[index]});
    return;
  }
  res.render('./swipe.ejs', {data: users[index]});
});

module.exports = router;
