const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;

// picks all id's from database
const allIds = [];
router.get('/swipe', function(req, res) {
  if (req.session.user) {
    db.get().collection('user').find()
        .toArray(function(err, data) {
          if (err)
            {console.log(err);}
          for (let i = 0; i < data.length; i++) {
            allIds.push(data[i]);
            if (req.session.user._id == data[i]._id) {
              allIds.splice(i, 1);
            }
          }
          console.log('You are logged in as: ' + data[index].username);
          res.render('swipe.ejs', {
            data: allIds[0],
          });
        });
  } else {
    res.render('inloggen.ejs');
  };
});


// Loops through all the users (Swipe feature)
let index = 1;

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

        // Checks if it's you
        if (req.session.user._id == data[index]._id) {
          console.log('This is you');
        }
        // Sets the superlike to the like
        if (req.body.liking == 1 || req.body.liking == 2) {
          // let x = [];

          db.get().collection('user').updateOne({
            '_id': objectId(req.session.user._id),
          }, {
            $push: {
              likes: data[index]._id,
            },
          }, (err, result) => {
            if (err) console.log(err);
            if (result) {
              console.log('Mission accomplisched');
            }
          });

          console.log('You liked ' + data[index].username + ' ' + data[index]._id + ' ');
        } else {
          console.log('You disliked ' + data[index].username + ' ' + data[index]._id + ' ');
        }
        if (index === data.length - 1) {
          index = 1;
          console.log('This is the end of the list');
        }

        console.log('You liked number: '+ data.length + index);
        index++;

        res.render('swipe.ejs', {
          data: data[index],
        });
      });
});

module.exports = router;
