import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, orderProduct } from "../api";
import NavBar from "../components/NavBar";

function ProductPage() {
	const { id } = useParams();
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState(null);
	const [address, setAddress] = useState("");
	useEffect(() => {
		const fetchProduct = async () => {
			const result = await getProductById(id);
			// console.log(result);
			setProduct(result);
		};
		fetchProduct();
	}, []);

	const handleOrder = async () => {
		product.quantity = quantity;
		if (
			address === "" ||
			address === null ||
			address === undefined ||
			address.length < 10
		) {
			alert("Please enter a valid address");
			return;
		}
		product.address = address;
		try {
			const result = await orderProduct(product);
			// console.log(result);
			if (result.status === 201) {
				alert("Order Placed Successfully");
				return;
			}
		} catch (err) {
			if (err.response.status === 401) {
				alert("Please Login/Signup to order");
				return;
			}
			console.log(err);
		}
	};

	return (
		<>
			{product && (
				<div className="w-full h-full">
					<NavBar />
					{/* Main Wrapper */}
					<div className="flex mt-12">
						<div className="w-1/2 text-center ">
							<img
								className="w-1/2 block m-auto"
								src={product.image}
								alt={product.name}
							/>
						</div>

						{/* Product info */}
						<div className="w-1/2 p-5 pr-10">
							<div className="block font-bold text-[12px] text-[#888]">
								{product.category.toUpperCase()}
							</div>
							<div className="flex justify-between mt-2 items-center">
								<div className="text-[20px] text-[#333] uppercase max-w-[550px]">
									{product.name}
								</div>
								<div className=" no-wrap block px-1.5 py-2 uppercase bg-[#18d11f] rounded-xl text-white text-[11px] font-bold ">
									In Stock
								</div>
							</div>

							<div className="font-bold text-xl mt-4 ">${product.price}</div>

							<div className="leading-[20px] tracking-[0.3px] mt-5 max-w-[620px]">
								{product.description}
							</div>

							<input
								className="mt-4 w-full h-8 border-2 border-black"
								type="text"
								placeholder="Address"
								value={address || ""}
								onChange={(e) => setAddress(e.target.value)}
							/>

							<div className="flex mt-5 justify-between">
								<div className="flex items-center gap-2">
									<input
										className="text-center border-2 border-black"
										type="number"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
										placeholder="1"
										name="quantity"
										max={4}
										min={1}
										id=""
									/>
									<div>Qty</div>
								</div>

								<button
									onClick={handleOrder}
									className="w-2/3 bg-black text-white rounded-md py-2"
								>
									Place Your Order
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductPage;
