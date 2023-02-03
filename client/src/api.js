import axios from "axios";
import { categories } from "./categories";

const getCategories = async () => {
	const final = categories;

	return final;
};

const products = async () => {
	const response = await axios.get("http://localhost:5000/products");
	return response.data;
};

const productsByCategory = async (category) => {
	const response = await axios.get(
		`http://localhost:5000/products?category=${category}`
	);
	return response.data;
};

const getProductById = async (id) => {
	const response = await axios.get(`http://localhost:5000/products/${id}`);
	return response.data;
};

const orderProduct = async (product) => {
	const response = await axios.post("http://localhost:5000/orders", {
		productId: product._id,
		price: product.price,
		productImage: product.image,
		description: product.description,
		productName: product.name,
		date: new Date(),
		address: product.address,
		quantity: product.quantity,
	});
	return response;
};

const isUserLoggedIn = async () => {
	const response = await axios.get("http://localhost:5000/currentuser");
	// console.log("hehfhefhehfh");
	// console.log(response);
	return response;
};

const getOrders = async () => {
	const response = await axios.get("http://localhost:5000/orders");
	return response;
};

export {
	getCategories,
	products,
	productsByCategory,
	getProductById,
	orderProduct,
	isUserLoggedIn,
	getOrders,
};
