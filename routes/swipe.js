const express = require('express');
const router = express.Router();
const db = require('../helper/database');


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
        const randomNumber = Math.floor(Math.random() * data.length);

        const allIds = [];
        for (const x of data) {
          allIds.push(x.id);
        }

        // eslint-disable-next-line max-len
        console.log('The users ID of ' + (data[randomNumber].username) + ' = ' + data[randomNumber]._id);
        index++;

        if (index === allIds.length) {
          index = 0;
        }

        res.render('swipe.ejs', {
          data: data[randomNumber],
        });
      });
});


module.exports = router;
