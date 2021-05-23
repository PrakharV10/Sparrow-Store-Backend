const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: {
			type: String,
			minlength: [4, 'Username should be atleast 4 characters long'],
		},
		email: {
			type: String,
			required: 'Email is required to create an Account',
			unique: true,
		},
		password: {
			type: String,
			required: 'Password is required',
		},
		cart: [
			{
				quantity: Number,
				product: { type: Schema.Types.ObjectId, ref: 'Product' },
			},
		],
		wishlist: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

async function initializeFirstUser() {
	try {
		const NewUser = new User({
			username: 'Prakhar Varshney',
			email: 'prakhar.10.varshney@gmail.com',
			password: 'ReactRedux',
		});

		const savedUser = await NewUser.save();
		console.log(savedUser);
	} catch (err) {
		console.log('An Error Occured : ', err);
	}
}

module.exports = { User, initializeFirstUser };
