import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../api";
import axios from "axios";

function NavBar() {
	const [logged, setLogged] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		checkUser();
		// console.log("component mounted");

		// return () => {
		// 	console.log("component unmounted");
		// };
	}, [logged]);

	const checkUser = async () => {
		// console.log("okokokokok");
		const resp = await isUserLoggedIn();
		// console.log(resp.status);
		// console.log("kyayayayay");
		if (resp.status === 200) {
			setLogged(true);
			// console.log("first");
		} else {
			setLogged(false);
			// console.log("second");
		}
	};

	const handleSignOut = async () => {
		const resp = await axios.post("http://localhost:5000/user/signout");
		if (resp.status === 200) {
			setLogged(false);
		}
	};

	const handleSignIn = () => {
		navigate("/login");
	};

	return (
		<div className="flex justify-between mx-2">
			<div className="text-5xl font-bold px-4 text-blue-300">Shopster</div>

			<div className="flex gap-x-8 items-end">
				<Link to="/">
					<div className="text-2xl hover:text-sky-200 cursor-pointer">Home</div>
				</Link>
				<Link to="/orders">
					<div className="text-2xl hover:text-sky-200 cursor-pointer ">
						Orders
					</div>
				</Link>
				<div className="text-2xl hover:text-sky-200 cursor-pointer">
					AboutUs
				</div>
			</div>
			<div className="relative self-end">
				<div
					onClick={logged ? handleSignOut : handleSignIn}
					className="text-2xl cursor-pointer hover:text-blue-600 hover:underline"
				>
					{logged ? "SignOut" : "Login/Signup"}
				</div>
			</div>
		</div>
	);
}

export default NavBar;
