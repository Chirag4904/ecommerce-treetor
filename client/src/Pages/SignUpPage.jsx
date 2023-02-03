import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const handleName = (e) => setName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handlePhone = (e) => setPhone(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		//TODO: send values to backend

		try {
			const response = await axios.post("http://localhost:5000/user/signup", {
				name,
				email,
				password,
				phone,
			});
			if (response.status === 201) {
				navigate("/");
			}
		} catch (err) {
			// console.log(err);
			alert(err.response.data.message);
		}

		setName("");
		setEmail("");
		setPassword("");
		setPhone("");
	};

	return (
		<div className="flex flex-row  items-center">
			<img src="./signcart.gif" alt="cart" className="w-1/2" />
			<div className="p-10">
				<div className="text-3xl font-bold text-blue-400">Welcome</div>
				<form className="w-full max-w-lg mt-3" onSubmit={handleSubmit}>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								value={name}
								onChange={handleName}
							/>
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Email
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								value={email}
								onChange={handleEmail}
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Password
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="password"
								placeholder="******************"
								value={password}
								onChange={handlePassword}
							/>
						</div>
					</div>

					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Phone
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								value={phone}
								onChange={handlePhone}
							/>
						</div>
					</div>

					<button className="bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-3 rounded">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
