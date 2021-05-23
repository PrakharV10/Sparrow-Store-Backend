const mongoose = require('mongoose');
const { Schema } = mongoose;
const { fakeProducts } = require('../DB/fakeProducts');

const productSchema = new Schema({
	name: {
		type: String,
		required: 'Name is required for the product.',
	},
	brand: {
		type: String,
		required: 'Brand name is Required.',
	},
	image: {
		type: String,
		required: 'Product Image is Required.',
	},
	desc: {
		type: String,
	},
	price: {
		type: Number,
		required: 'Product Price is Required',
	},
	ratings: Number,
	inStock: Boolean,
	fastDelivery: Boolean,
	category: String,
});

const Product = mongoose.model('Product', productSchema);

async function addItemToDb() {
	try {
		fakeProducts.forEach(async (one) => {
			const NewProduct = new Product(one);
			const savedProduct = await NewProduct.save();
			console.log(savedProduct);
		});
	} catch (err) {
		console.log('Error Occured : ', err);
	}
}

module.exports = { Product, addItemToDb };
