const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	productId: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	productName: {
		type: String,
		required: true,
	},
	productImage: {
		type: String,
		required: true,
	},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
