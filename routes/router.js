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
const homepage = require('./src/index');
const login = require('./src/log-in');
const register = require('./src/register');
const users = require('./src/users');
const swipe = require('./src/swipe');
const notification = require('./src/notification');
const nomatches = require('./src/nomatches');
const verify = require('./src/verify');
const forgotpassword = require('./src/forgot-password');
const resetpassword = require('./src/reset-password');
const introduce = require('./src/introduce');


// Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);
router.use('/', users);
router.use('/', swipe);
router.use('/', notification);
router.use('/', nomatches);
router.use('/', verify);
router.use('/', forgotpassword);
router.use('/', resetpassword);
router.use('/', introduce);


module.exports = router;
