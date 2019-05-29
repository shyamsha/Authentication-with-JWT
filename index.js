const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const mongoose = require("./config/db_connect");

const { userController } = require("./app/controllers/user_controller");

app.use(express.json());

app.use(cors());

app.use("/users", userController);

app.get("/", (req, res) => {
	res.send("Welcome to your chat");
});
app.use(function(req, res) {
	// res.sendStatus(404);
	res
		.status(404)
		.send(
			"The resource you are looking for doesn’t exist." + "\n 404 Not Found "
		);
});

app.listen(port, () => {
	console.log("listining from", port);
});
