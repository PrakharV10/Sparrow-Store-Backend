const express = require('express');
const router = express.Router();
const {
	getUserFromParams,
	getPopulatedCart,
	addToCart,
	updateCartItemQuanity,
	deleteCartItem,
} = require('../controllers/cart.controller');

router.param('userId', getUserFromParams);

router
	.route('/:userId')
	.get(getPopulatedCart)
	.post(addToCart)
	.put(updateCartItemQuanity)
	.delete(deleteCartItem);

module.exports = router;
