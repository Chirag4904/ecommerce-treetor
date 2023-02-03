const orderDatabase = require("./order.mongo");

async function addNewOrder(order) {
	try {
		const newOrder = {
			userId: order.userId,
			productId: order.productId,
			quantity: order.quantity,
			price: order.price,
			date: order.date,
			address: order.address,
			productName: order.productName,
			productImage: order.productImage,
		};
		const savedOrder = await orderDatabase.create(newOrder);
		return savedOrder;
	} catch (error) {
		console.log(`Could not save order ${err}`);
	}
}

async function findAllOrders(userId) {
	try {
		const orders = await orderDatabase.find({ userId: userId });
		return orders;
	} catch (error) {
		console.log(`Could not find orders ${err}`);
	}
}

async function findOrderById(id) {
	try {
		const order = await orderDatabase.findById(id);
		return order;
	} catch (error) {
		console.log(`Could not find order ${err}`);
	}
}

module.exports = { addNewOrder, findAllOrders, findOrderById };
