const {
	addNewOrder,
	findAllOrders,
	findOrderById,
} = require("../models/order.model");

async function createOrder(req, res) {
	const order = req.body;
	order.userId = req.userId;

	// console.log("request of order", req);
	try {
		const savedOrder = await addNewOrder(order);
		return res.status(201).json(savedOrder._id);
	} catch (error) {
		console.log(error);
		return res.status(500).send("Server is not working properly");
	}
}

async function getOrders(req, res) {
	console.log(req);
	const userId = req.userId;
	const orders = await findAllOrders(userId);
	return res.status(200).json(orders);
}

async function getOrder(req, res) {
	const id = req.params.id;
	const order = await findOrderById(id);
	return res.status(200).json(order);
}

module.exports = { createOrder, getOrders, getOrder };
