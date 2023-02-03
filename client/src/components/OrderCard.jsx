function OrderCard({ order }) {
	const { productImage, productName, price, quantity, date, address } = order;
	return (
		<div className="flex w-[500px] bg-white rounded-lg drop-shadow-xl">
			<div>
				<img
					className="w-24 rounded-lg "
					src={productImage}
					alt={productName}
				/>
			</div>
			<div className="pl-10 pt-4">
				<div className="flex justify-between">
					<div className="truncate w-[250px]">{productName}</div>
					<div>{date.slice(0, 10)}</div>
				</div>
				<div className="mt-2 w-[250px] whitespace-normal">
					Delivered to {address}
				</div>

				<div className="flex justify-between mt-2">
					<div>Qty {quantity}</div>
					<div>Total Price ${quantity * price}</div>
				</div>
			</div>
		</div>
	);
}

export default OrderCard;
