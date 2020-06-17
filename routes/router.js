require('dotenv').config();
const flash = require('express-flash');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');


router.use(flash());
router.use(cookieParser());
router.use(bodyParser.urlencoded({
  extended: true,
}));
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
const verify = require('./verify');
const forgotpassword = require('./forgot-password');
const resetpassword = require('./reset-password');
const introduce = require('./introduce');


// Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);
router.use('/', users);
router.use('/', swipe);
router.use('/', notification);
router.use('/', verify);
router.use('/', forgotpassword);
router.use('/', resetpassword);
router.use('/', introduce);


module.exports = router;
