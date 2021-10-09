const mongoose = require("mongoose");
const User = require("../models/User")



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
		type: String,
		minlength: 1,
		maxlength: 1,
		required: true,
	},
	category:{
		type: String,
		enum: [
	        "Machine Learning",
			"Artificial Intelligence",
			"Deep learning" ,
			"Web development",
			"Python",
			"C++",
			"App devlopment",
			"Data visualization",
		],
	},
	mentor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: User,
	},
	isAccepted: {
		type: Boolean,
		default: false,
	},
	acceptedUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: User,
	},
	apply: [
		{
		description: {
		type: String,
		required: true,
		},
		mentee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: User,
		},
		},
		],
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
