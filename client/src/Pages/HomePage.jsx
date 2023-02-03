import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { useState, useEffect } from "react";
import { getCategories, products, productsByCategory } from "../api";

import CategoryList from "../components/Category";
import Products from "../components/Products";

function HomePage() {
	const [categories, setCategories] = useState([]);
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		const result = await getCategories();
		setCategories(result);
	};

	const fetchProducts = async () => {
		const result = await products();
		// console.log(result);
		setProduct(result);
	};

	const fetchProductsByCategory = async (category) => {
		const result = await productsByCategory(category);
		setProduct(result);
	};

	return (
		<div className="w-full h-full ">
			<NavBar />
			<Banner />
			<CategoryList
				categories={categories}
				fetchProductsByCategory={fetchProductsByCategory}
			/>

			<Products product={product} />
		</div>
	);
}

export default HomePage;
