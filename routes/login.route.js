const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');

router.route('/').post(async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
	const currentUser = await User.findOne({ email, password });
	console.log(currentUser);
	if (currentUser) {
		res.json({ success: true, user: currentUser, message: '' });
	} else {
		res.json({ success: false, user: null, message: 'Invalid Username or Password' });
	}
});

module.exports = router;
