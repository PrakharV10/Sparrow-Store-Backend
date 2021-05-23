const faker = require('faker');

faker.seed(123);

const fakeProducts = [...Array(50)].map((item) => ({
	name: faker.commerce.productName(),
	desc: faker.commerce.productDescription(),
	image: faker.random.image(),
	price: faker.commerce.price(),
	brand: faker.lorem.word(),
	inStock: faker.datatype.boolean(),
	fastDelivery: faker.datatype.boolean(),
	ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	category: faker.random.arrayElement(['Sketchbook', 'Tablet', 'Laptop', 'GPU']),
}));

console.log(fakeProducts);

module.exports = { fakeProducts };
