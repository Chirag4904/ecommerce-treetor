const express = require("express");

const currentUserRouter = express.Router();

currentUserRouter.get("/", (req, res) => {
	// console.log(req.session.jwt);
	console.log("in current user route");
	try {
		if (req.session.jwt) {
			console.log("Session found");
			return res.status(200).send({ message: "Authorized" });
		}
	} catch (err) {
		console.log(err);
		console.log("No session found");
		return res.status(401).send({ message: "Unauthorized" });
	}
});

module.exports = currentUserRouter;
