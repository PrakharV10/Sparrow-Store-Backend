const express = require('express');
const router = express.Router();
const { authVerify } = require('../utils/middleware');
const { getUserById } = require('../controllers/user.controller');

router.use(authVerify);

router.get('/', getUserById);

module.exports = router;
