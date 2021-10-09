const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
	skill: {
		type: String,
	},
});

const applySchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	mentee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
});

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
		required: true,
	},
	timePeriod: {
		type: Number,
		minlength: 1,
		maxlength: 1,
		required: true,
	},
	skills: [skillSchema],
	category: {
		type: String,
		enum: [""],
	},
	mentor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	isAccepted: {
		type: boolean,
		default: false,
	},
	acceptedUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	apply: [applySchema],
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
