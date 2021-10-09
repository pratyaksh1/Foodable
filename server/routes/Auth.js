const express = require("express");
const _  = require("lodash");
const jwt = require("jsonwebtoken");


const router = express.Router();
const {User}=require("../models/User")

const accountSid =  process.env.ACCOUNT_SID; //twilio
const serviceSid = process.env.SERVICE_ID //twilio
const authToken = process.env.AUTH_TOKEN; //twilio
const client = require("twilio")(accountSid, authToken); //twilio
const auth = require("../middlewares/auth");

router.post("/sign-in", async (req, res) => {
 let phoneNumber  = req.body.phoneNumber;
 

  if (!phoneNumber) {
  console.log("a");
    return res.status(400).send({ Error: "Something went wrong" });
  }
  try {
    client.verify
      .services(serviceSid)
      .verifications.create({
        to: `+91${phoneNumber}`,
        channel: "sms",
        // appHash: `${req.body.hash}`,
      })
      .then((data) => {
        console.log(data);
        const details = _.pick(data, ["status", "to", "valid"]);
        res.status(200).send( { details: details });
        
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({ Error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(505).send(err.message);
  }
});

router.post("/authenticate-phoneNumber", async (req, res) => {
    let {phoneNumber, code } = req.body;
      console.log(phoneNumber )
      console.log(code)
    if (!phoneNumber || !code) {
      return res.status(400).send("Something went wrong");
    }
    console.log(code, phoneNumber);
    try {
      const data = await client.verify
        .services(serviceSid)
        .verificationChecks.create({
          to: `+91${phoneNumber}`,
          code: req.body.code,
        });
      console.log(data);
      if (data.status === "pending") {
        throw new Error();
      }
  
      let user = await User.findOne({ phoneNumber: phoneNumber });
      console.log(user);
      if (user) {
        const token = user.generateAuthToken();
        console.log(token);
        // return res.render("userHome", { token: token});
        return res.status(200).send({ token: token });
        
        
  
      } else {
        user = new User({ phoneNumber: phoneNumber });
        user = await user.save();
        const token = user.generateAuthToken();
        return res.render("signin-3", { token: token});
        //return res.status(200).send({ token });
      }
    } catch (error) {
      console.log(error);
      return res.status(505).send("Something went wrong");
    }
  });
  
  router.post("/signup-details",auth, async (req, res) => {
  
    let {firstName,lastName,phoneNumber,emailId,collegeName,yearOfStudy} = req.body;
  
  const { _id } = req.user;
  
  console.log("token")
  console.log(_id)
  User.findByIdAndUpdate(_id, {firstName:firstName,lastName:lastName,phoneNumber:phoneNumber,emailId:emailId,collegeName:collegeName,yearOfStudy:yearOfStudy }, function (err) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Updated User ");
          return res.render("userHome", { token1: token1});
      }
  });
    //const Username = req.body.UserName;
       
    })
  module.exports = router