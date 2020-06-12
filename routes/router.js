const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true,
}));
require('dotenv').config();
const session = require('express-session');
const cookieParser = require('cookie-parser');

router.use(cookieParser());
router.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
      },
    }),
);

// Pages required
const homepage = require('./index');
const login = require('./log-in');
const register = require('./register');
const users = require('./users');
const swipe = require('./swipe');
const notification = require('./notification');


// Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);
router.use('/', users);
router.use('/', swipe);
router.use('/', notification);


module.exports = router;
