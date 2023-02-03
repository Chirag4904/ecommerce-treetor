const express = require("express");
const orderRouter = express.Router();

const {
	createOrder,
	getOrders,
	getOrder,
} = require("../controllers/order.controller");

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrder);

module.exports = orderRouter;
