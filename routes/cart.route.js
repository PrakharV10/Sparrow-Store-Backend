const express = require('express');
const router = express.Router();
const { authVerify } = require('../utils/middleware');
const {
	getUserFromID,
	getPopulatedCart,
	addToCart,
	updateCartItemQuanity,
	deleteCartItem,
} = require('../controllers/cart.controller');

router.use(authVerify, getUserFromID);

router
	.route('/')
	.get(getPopulatedCart)
	.post(addToCart)
	.put(updateCartItemQuanity)
	.delete(deleteCartItem);

module.exports = router;
