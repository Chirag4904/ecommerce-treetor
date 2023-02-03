const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { createProductDB } = require("./models/product.model");
const mockData = require("./mock/productMock");

const PORT = 5000;

const server = http.createServer(app);

async function startServer() {
	await mongoConnect();
	// await createProductDB(mockData);
	server.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

startServer();
