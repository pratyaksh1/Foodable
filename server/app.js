require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const app = express();
const http = require("http").Server(app);
const db = require("./config/db");

db();
app.use(morgan("dev"));

app.use(express.json({ extended: false, limit: "10mb" }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.json({ Msg: "Hello there! Welcome to Project Deck" });
});

http.listen(PORT, () => {
	console.log(chalk.blueBright(`Listening on port ${PORT}`));
});
