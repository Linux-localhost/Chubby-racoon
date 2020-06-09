const express = require('express');
const router = express.Router();
const db = require('../helper/database');

// Pages required
const homepage = require('./index');
const login = require('./log-in');
const register = require('./register');
const users = require('./users');


//Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);
router.use('/', users);


module.exports = router;    