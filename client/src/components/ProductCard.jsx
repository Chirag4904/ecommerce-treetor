import { useNavigate } from "react-router-dom";

function ProductCard({ title, price, image, category, id }) {
	const navigate = useNavigate();
	const navigateToProductPage = () => {
		navigate(`/product/${id}`);
	};
	return (
		<div
			onClick={navigateToProductPage}
			className="p-4 pt-10 h-[22rem] rounded-lg overflow-hidden shadow-lg cursor-pointer relative flex justify-center"
		>
			<img
				className=" object-cover align-center transition-all hover:opacity-50  "
				src={image}
				alt={title}
			/>
			<div className="absolute top-2 z-10 truncate w-40 opacity-100 hover:opacity-90	 ">
				{title}
			</div>
		</div>
	);
}

export default ProductCard;
