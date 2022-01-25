const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {
	getAllProducts,
	getProductFromParam,
	getProductFromProductID,
} = require('../controllers/products.controller');

router.route('/').get(getAllProducts);

router.param('productId', getProductFromParam);

router.route('/:productId').get(getProductFromProductID);

module.exports = router;
