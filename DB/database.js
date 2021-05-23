const mongoose = require('mongoose');

const uri =
	'mongodb+srv://prakharvarshney:fantastic10@sparrow-cluster.7brzk.mongodb.net/sparrow-store?retryWrites=true&w=majority';

async function connectDb() {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connection Successful');
	} catch (err) {
		console.log('Some Error Occured :', err);
	}
}

module.exports = { connectDb };
