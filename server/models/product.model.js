const productDatabase = require("./product.mongo");

async function createProductDB(products) {
	try {
		products.forEach(async (product) => {
			const newProduct = {
				name: product.title,
				price: product.price,
				image: product.image,
				description: product.description,
				category: product.category,
			};
			const savedProduct = await productDatabase.create(newProduct);
		});
	} catch (err) {
		console.log(`Could not save products ${err}`);
	}
}

module.exports = { createProductDB };
