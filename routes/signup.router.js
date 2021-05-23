const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
let userTable = require('../DB/usertable.collection');

router.route('/').post(async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const NewUser = new User({
			username: username,
			email: email,
			password: password,
		});

		const savedUser = await NewUser.save();

		res.json({ success: true, user: savedUser, message: '' });
	} catch (err) {
		console.log('Error Occured : ', err);
		res.json({ success: false, user: null, message: 'Error Occured' });
	}
});

module.exports = router;
