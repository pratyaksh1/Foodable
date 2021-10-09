const express = require("express");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../models/User");
const Project = require("../models/Project");

const auth = require("../middlewares/auth");

router.post("/project-data", auth, async (req, res) => {
	let { name, description, category, timePeriod } = req.body;
	const { _id } = req.user;
	try {
		console.log("token");
		console.log(_id);
		let project = new Project({
			name,
			description,
			category,
			timePeriod,
			mentor: _id,
		});

		await project.save();
		let projects = await Project.find({}).populate("mentor", "acceptedUser");
		return res.send({ status: "Successful", projects });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});
module.exports = router;
