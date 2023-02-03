const productDatabase = require("../models/product.mongo");
async function getAllProducts(req, res) {
	const query = req.query;
	console.log(query);
	try {
		const products = await productDatabase.find(query);
		res.status(200).json(products);
	} catch (err) {
		console.log(`Could not get products ${err}`);
	}
}

async function getProductById(req, res) {
	const id = req.params.id;
	try {
		const product = await productDatabase.findById(id);
		res.status(200).json(product);
	} catch (error) {
		console.log(`Could not get product ${err}`);
	}
}

module.exports = { getAllProducts, getProductById };
