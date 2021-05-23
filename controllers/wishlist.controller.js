const express = require('express');
const { extend } = require('lodash');
const { User } = require('../models/user.model');

const getWishlistItems = async (req, res) => {
	let { user } = req;
	const populatedUser = await user.populate('wishlist').execPopulate();
	res.json({
		success: true,
		message: 'wishlist successfully fetched',
		wishlist: populatedUser.wishlist,
	});
};

const addToWishlist = async (req, res) => {
	let { user } = req;
	const { productId } = req.body;
	user.wishlist.push(productId);
	try {
		await user.save();
		res.json({ success: true, message: 'Item Added to wishlist', wishlist: user.wishlist });
	} catch (err) {
		res.json({ success: false, message: 'Error in Adding to wishlist' });
	}
};

const deleteFromWishlist = async (req, res) => {
	let { user } = req;
	const { productId } = req.body;
	user.wishlist.pull(productId);
	try {
		await user.save();
		res.json({ success: true, message: 'Item Removed From wishlist', wishlist: user.wishlist });
	} catch (err) {
		res.json({ success: false, message: 'Error in Removing from wishlist' });
	}
};

module.exports = { getWishlistItems, addToWishlist, deleteFromWishlist };
