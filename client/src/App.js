import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUpPage";
import ProductPage from "./Pages/ProductPage";
import OrdersPage from "./Pages/OrdersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="/orders" element={<OrdersPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
