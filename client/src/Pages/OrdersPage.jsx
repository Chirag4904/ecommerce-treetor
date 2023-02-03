import { useEffect, useState } from "react";
import { getOrders } from "../api";
import NavBar from "../components/NavBar";
import OrderCard from "../components/OrderCard";

function OrderPage() {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const result = await getOrders();
				if (result.status === 200) {
					setOrders(result.data);
				}
			} catch (err) {
				// console.log(err);
			}
		};
		fetchOrders();
	}, []);

	return (
		<div className="">
			<NavBar />
			{orders.length > 0 ? (
				<div className="flex flex-col items-center gap-y-10 mt-10 bg-gray-10">
					{orders.map((order) => {
						return <OrderCard key={order._id} order={order} />;
					})}
				</div>
			) : (
				<div className="text-xl mt-10 text-center">Orders Not Placed</div>
			)}
		</div>
	);
}

export default OrderPage;
