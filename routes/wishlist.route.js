const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { authVerify } = require('../utils/middleware');
const { getUserFromID } = require('../controllers/cart.controller');
const {
	getWishlistItems,
	addToWishlist,
	deleteFromWishlist,
} = require('../controllers/wishlist.controller');

router.use(authVerify, getUserFromID);

router.route('/').get(getWishlistItems).post(addToWishlist).delete(deleteFromWishlist);

module.exports = router;
