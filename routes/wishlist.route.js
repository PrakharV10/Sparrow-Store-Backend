const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { getUserFromParams } = require('../utils/cart.util');
const { getWishlistItems, addToWishlist, deleteFromWishlist } = require('../utils/wishlist.util');

router.param('userId', getUserFromParams);

router.route('/:userId').get(getWishlistItems).post(addToWishlist).delete(deleteFromWishlist);

module.exports = router;
