const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');

router.get('/:userId', async (req, res) => {
	let { userId } = req.params;
	try {
		const currentUser = await User.find({ _id: userId });
		console.log(currentUser);
		if (!currentUser) res.json({ success: false, message: 'Error User not Found' });
		else res.json({ success: true, message: 'User details fetched', user: currentUser });
	} catch (err) {
		res.json({ success: false, message: 'Server Error, unable to fetch' });
	}
});

module.exports = router;
