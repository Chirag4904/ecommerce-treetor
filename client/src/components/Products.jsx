import ProductCard from "./ProductCard";

function Products({ product }) {
	// console.log("Products", product);
	const renderedProduct = product.map((prod) => {
		return (
			<ProductCard
				key={prod._id}
				id={prod._id}
				title={prod.name}
				price={prod.price}
				image={prod.image}
				category={prod.category}
			/>
		);
	});
	return (
		<div>
			<div className="text-2xl font-semibold ml-10">
				Weekly Popular Products
			</div>
			<div className="flex flex-wrap justify-between mt-10 gap-10">
				{renderedProduct}
			</div>
		</div>
	);
}

export default Products;
