const { Product } = require('../models/product.model');

async function getAllProducts(req, res) {
	try {
		const products = await Product.find({});
		res.status(200).json({
			success: true,
			data: products,
			message: 'Successfully Fetched Products',
		});
	} catch (err) {
		console.log(err);
		res.json({ success: false, message: 'Error Getting Products' });
	}
}

async function getProductFromParam(req, res, next, productId) {
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
}

async function getProductFromProductID(req, res) {
	const { product } = req;
	res.json({ success: true, data: product });
}

module.exports = { getAllProducts, getProductFromParam, getProductFromProductID };
