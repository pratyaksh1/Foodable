const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
		maxLength: 10,
		minlength: 10,
		default: 0,
		unique: true,
	},
	emailId: {
		type: String,
	},
	collegeName: {
		type: String,
	},
	yearOfStudy: {
		type: String,
		enum: [
			"First Year",
			"Second Year",
			"Third Year",
			"Fourth Year",
			"Fifth Year",
		],
	},
});
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.jwtKey);
	return token;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
