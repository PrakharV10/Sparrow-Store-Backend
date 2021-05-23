const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('../models/product.model');
const router = express.Router();

router.route('/').get(async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, products, message: 'Successfully Fetched Products' });
	} catch (err) {
		console.log(err);
		res.json({ success: false, products: null, message: 'Error Getting Products' });
	}
});

router.param('productId', async (req, res, next, productId) => {
	try {
		const currentProduct = await Product.findById(productId);

		if (!currentProduct) {
			return res.status(404).json({ success: false, message: 'Product not found' });
		}

		req.product = currentProduct;
	} catch (err) {
		return res.status(404).json({ success: false, message: 'Some Error Occured' });
	}

	next();
});

router.route('/:productId').get((req, res) => {
	const { product } = req;
	res.json({ success: true, product });
});

module.exports = router;
