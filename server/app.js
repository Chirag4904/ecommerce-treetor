const express = require("express");
const app = express();
const cors = require("cors");
const cookieSession = require("cookie-session");

const validateUser = require("./middlewares/validateUser");

const userRouter = require("./routes/user.route");
const orderRouter = require("./routes/order.route");
const productRouter = require("./routes/product.route");
const currentUserRouter = require("./routes/currentUser.route");

app.use(express.json());
app.use(
	cookieSession({
		signed: false,
		secure: false,
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,

		origin: "http://localhost:3000",
	})
);

app.use("/user", userRouter);
app.use("/currentuser", currentUserRouter);
app.use("/products", productRouter);
app.use("/orders", validateUser, orderRouter);

module.exports = app;
