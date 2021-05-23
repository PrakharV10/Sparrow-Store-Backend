const express = require('express');
const { extend } = require('lodash');
const { User } = require('../models/user.model');

const getUserFromParams = async (req, res, next, userId) => {
	try {
		const currentUser = await User.findOne({ _id: userId });

		if (!currentUser) {
			return res.json({ success: false, message: 'User not found' });
		}

		req.user = currentUser;
	} catch (err) {
		console.log('Error Occured during User Finding :', err);
		return res.json({ success: false, message: 'Some Error Occured' });
	}

	next();
};

const getPopulatedCart = async (req, res) => {
	let { user } = req;
	const populatedUser = await user.populate('cart.product').execPopulate();
	res.json({ success: true, message: 'Successfully fetched', cart: populatedUser.cart });
};

const addToCart = async (req, res) => {
	let { user } = req;
	const { productId } = req.body;
	const updatedUser = user.cart.push({ quantity: 1, product: productId });
	user = extend(user, updatedUser);
	try {
		await user.save();
		res.json({ success: true, message: 'Added to Cart', cart: user.cart });
	} catch (err) {
		console.log('Error while Adding to cart :', err);
		res.json({ success: false, message: 'Error while Adding to Cart' });
	}
};

const updateCartItemQuanity = async (req, res) => {
	let { user } = req;
	const { productId, action } = req.body;
	let cartItem = user.cart.find((one) => one.product == productId);
	if (action === 'ADD') cartItem.quantity += 1;
	else cartItem.quantity -= 1;
	try {
		await user.save();
		res.json({ success: true, message: 'Successfully Updated', cart: user.cart });
	} catch (err) {
		console.log('Updation unsuccessful :', err);
		res.json({ success: false, message: 'Error while Updating' });
	}
};

const deleteCartItem = async (req, res) => {
	let { user } = req;
	const { productId } = req.body;
	let cartItem = user.cart.find((one) => one.product == productId);
	cartItem.remove();
	try {
		await user.save();
		res.json({ success: true, message: 'Successfully Deleted', cart: user.cart });
	} catch (err) {
		console.log('Deletion unsuccessful');
		res.json({ success: false, message: 'Error while Deleting' });
	}
};

module.exports = {
	getUserFromParams,
	getPopulatedCart,
	addToCart,
	updateCartItemQuanity,
	deleteCartItem,
};
