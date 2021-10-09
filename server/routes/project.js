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
		let projects = await Project.find({})
			.populate({
				path: "mentor",
				model: "User",
			})
			.populate({ path: "acceptedUser", model: "User" })
			.populate({ path: "apply.mentee", model: "User" });
		return res.send({ status: "Successful", projects });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});

router.post("/apply-data", auth, async (req, res) => {
	let { description, projectId } = req.body;
	const { _id } = req.user;
	try {
		console.log("token");
		console.log(_id);
		let project = await Project.findById(projectId);
		project.apply.push({ mentee: _id, description: description });

		await project.save();
		let projects = await Project.find({})
			.populate({ path: "mentor", model: "User" })
			.populate({ path: "acceptedUser", model: "User" })
			.populate({ path: "apply.mentee", model: "User" });
		return res.send({ status: "Successfully applied", projects });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});

router.get("/get-project", async (req, res) => {
	try {
		console.log("get project");
		let projects = await Project.find({})
			.populate({ path: "mentor", model: "User" })
			.populate({ path: "acceptedUser", model: "User" })
			.populate({ path: "apply.mentee", model: "User" });
		return res.send({ status: "Successfully applied", projects });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});

router.post("/accept-data", auth, async (req, res) => {
	let { acceptedUser, projectId } = req.body;
	const { _id } = req.user;
	try {
		console.log("token");
		console.log(_id);
		let project = await Project.findById(projectId);
		project.acceptedUser = acceptedUser;
		project.isAccepted = true;

		await project.save();
		let projects = await Project.find({})
			.populate({ path: "mentor", model: "User" })
			.populate({ path: "acceptedUser", model: "User" })
			.populate({ path: "apply.mentee", model: "User" });
		return res.send({ status: "Successfully applied", projects });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});

router.post("/show-profile", auth, async (req, res) => {
	const { _id } = req.user;
	try {
		console.log("token");
		console.log(_id);

		let project = await Project.findOne({ mentor: _id, isAccepted: false })
			.populate({ path: "mentor", model: "User" })
			.populate({ path: "acceptedUser", model: "User" })
			.populate({ path: "apply.mentee", model: "User" });

		return res.send({ status: "Successfully shown", project });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ Error: "Something went wrong" });
	}
});

module.exports = router;
