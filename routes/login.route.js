const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { validateEmailAndPassword } = require('../controllers/login.controller');

router.route('/').post(validateEmailAndPassword);

module.exports = router;
