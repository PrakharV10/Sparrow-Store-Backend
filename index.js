const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectDb } = require('./DB/database');
const { initializeFirstUser } = require('./models/user.model');

const login = require('./routes/login.route');
const signup = require('./routes/signup.router');
const products = require('./routes/products.route');
const cart = require('./routes/cart.route');
const wishlist = require('./routes/wishlist.route');
const user = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDb();
// Run Once
// addItemToDb();
// initializeFirstUser();

app.use('/login', login);
app.use('/signup', signup);
app.use('/products', products);
app.use('/cart', cart);
app.use('/wishlist', wishlist);
app.use('/user', user);

app.get('/', (req, res) => {
	res.send('You have reached Sparrow Store');
});

app.listen(3000, () => {
	console.log('server started');
});
