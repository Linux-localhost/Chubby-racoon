const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const objectId = db.ObjectID;


router.get('/swipe', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    res.render('swipe', {
      data: req.session.user,
    });
  } else res.redirect('/inloggen');
});

// Loops through all the users (Swipe feature)
let index = 0;
router.post('/swipe', (req, res) => {
  db.get().collection('user').find()
      .toArray(function(err, data) {
        if (err) {
          console.log(err);
        }

        // Pushes all Ids in the array
        const allIds = [];
        for (const x of data) {
          allIds.push(x.id);
        }

        if (index === allIds.length) {
          index = 0;
        }

        // Calculates a random number for in the array
        const randomNumber = Math.floor(Math.random() * data.length);

        // which button got clicked
        console.log(req.body.liking);
        // console.log(req.body.like-btn);
        console.log('The users ID of ' + (data[randomNumber].username) + ' = ' + data[randomNumber]._id);
        index++;

        if (req.body.liking == 0) {
          db.get().collection('user').updateOne({
            '_id': objectId(req.session.user._id),
          }, {
            $set: {
              'likes': data[randomNumber]._id,
            },
          }, (err, result) => {
            if (err) console.log(err);
            if (result) {
              console.log('Gelukt');
            }
          });
          console.log('You pressed the Dislike button');
        } else {
          console.log('You pressed the Superlike button or Like button');
        }

        res.render('swipe.ejs', {
          data: data[randomNumber],
        });
      });
});


module.exports = router;
