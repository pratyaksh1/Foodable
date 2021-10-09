const express = require("express");
const _  = require("lodash");
const jwt = require("jsonwebtoken");

const router = express.Router();
const {User}=require("../models/User")
const {Project}=require("../models/Project");
router.use(express.static("public"));
const auth = require("../middlewares/auth");

router.post("/project-data", async (req, res)=>{
 let {name,description,timePeriod,skills,mentor,isAccepted,acceptedUser,apply} = req.body;
 const { _id } = req.user;

});