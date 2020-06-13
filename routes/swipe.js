const express = require('express');
const router = express.Router();
const db = require('../helper/database');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;

const allIds = [];
router.get('/swipe', (req, res) => {
  if (req.session.user) {
    db.get().collection('user').find()
        .toArray(function(err, data) {
          if (err) console.log(err);
          for (let i = 0; i < data.length; i++) {
            allIds.push(data[i]);
            if (req.session.user._id == data[i]._id) {
              allIds.splice(i, 1);
            }
          }
          console.log(allIds);
          res.render('swipe.ejs', {
            data: allIds[0],
          });
        });
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

        if (req.session.user._id == data[index]._id) {
          console.log('dit ben je zelf');
        }
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
          console.log('dit is het einde');
        }

        console.log('hoi'+ data.length + index);
        index++;

        res.render('swipe.ejs', {
          data: data[index],
        });
      });
});

module.exports = router;
