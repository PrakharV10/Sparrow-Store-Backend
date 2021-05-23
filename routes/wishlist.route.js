const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { getUserFromParams } = require('../controllers/cart.controller');
const {
	getWishlistItems,
	addToWishlist,
	deleteFromWishlist,
} = require('../controllers/wishlist.controller');

router.param('userId', getUserFromParams);

router.route('/:userId').get(getWishlistItems).post(addToWishlist).delete(deleteFromWishlist);

module.exports = router;
