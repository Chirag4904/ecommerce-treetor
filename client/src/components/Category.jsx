import Card from "./Card";

function CategoryList({ categories, fetchProductsByCategory }) {
	const renderedList = categories.map((category, index) => {
		return (
			<Card
				key={index}
				cat={category}
				fetchProductsByCategory={fetchProductsByCategory}
			/>
		);
	});
	return (
		<div className="flex flex-row mt-10 ml-10 mb-10 justify-between mr-10 cursor-pointer">
			{renderedList}
		</div>
	);
}

export default CategoryList;
