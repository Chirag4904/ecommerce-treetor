import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/user/signin", {
				email,
				password,
			});
			if (response.status === 200) {
				navigate("/");
			}
		} catch (err) {
			// console.log(err.response.data.message);
			alert(err.response.data.message);
		}
		setEmail("");
		setPassword("");
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePasword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="flex md:flex-col md:justify-center lg:flex-row  max-w-full flex-wrap lg:justify-between items-center">
			<img src="./cart.gif" alt="cart" className="ml-10" />

			<div className="flex flex-col justify-between mr-32">
				<div className="text-3xl font-bold text-blue-900 text-center">
					Welcome Back
				</div>
				<div className="w-full max-w-xs">
					<form
						className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
						onSubmit={handleSubmit}
					>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={email}
								type="text"
								onChange={handleEmail}
								placeholder="Email"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								value={password}
								onChange={handlePasword}
								type="password"
								placeholder="******************"
							/>
						</div>
						<div className="flex gap-2 items-center ">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Login
							</button>
							<Link
								className="text-blue-400 hover:text-blue-700 underline"
								to="/signup"
							>
								New User?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
