const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
		maxLength: 10,
		minlength: 10,
		default: 0,
	},
	emailId: {
		type: String,
		required: true,
	},
	collegeName: {
		type: String,
		required: true,
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
		required: true,
	},
});

const User = mongoose.model("user", userSchema);

module.exports = User;
