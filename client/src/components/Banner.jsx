function Banner() {
	return (
		<div>
			<div className="relative">
				<img src="./ban.jpg" alt="banner" className="mt-4 " />
				<div className="absolute left-[585px] top-[125px] ">
					<div className="text-3xl text-blue-800 font-bold">
						TOP DEALS FOR THE DAY
					</div>
					<button className="ml-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
						Learn More
					</button>
				</div>
			</div>
			<div className="mt-10 ml-10 text-2xl font-semibold">
				Shop Our Top Catagories
			</div>
		</div>
	);
}

export default Banner;
