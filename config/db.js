const mongoose = require("mongoose");
const chalk = require("chalk");

const DB = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(chalk.magentaBright("Mongodb Connected ...."));
	} catch (err) {
		console.log(chalk.redBright(err.message));
		throw err;
	}
};

module.exports = connectDB;
