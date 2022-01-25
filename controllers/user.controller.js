const express = require('express');
const { User } = require('../models/user.model');

async function getUserById(req, res) {
	const { userId } = req.user;

	try {
		const currentUser = await User.findOne({ _id: userId });
		res.json({ success: true, data: currentUser });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
}

module.exports = { getUserById };
