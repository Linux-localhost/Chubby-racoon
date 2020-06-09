const express = require('express');
const router = express.Router();

// Pages required
const homepage = require('./index');
const login = require('./log-in');
const register = require('./register');


//Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);


module.exports = router;    