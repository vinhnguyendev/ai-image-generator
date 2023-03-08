import express from "express";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt"


import User from "..//mongodb/models/user.js";

dotenv.config();

const router = express.Router();

//get
router.route("/").get(async(req,res) => {
    console.log('Mongodb GET User End-point hit!')
      try{
          const users = await User.find({});
          console.log(users)
          res.status(200).json({ sucess: true, data: users })
      }catch (error) {
          res.status(500).json({ sucess: false, message: error })
      }
  });

//post
router.route("/").post(async (req, res) => {
    console.log('Mongodb POST End-point hit! ')
    try {
      const {firstname,lastname,email,password } = req.body;
      console.log(req.body)
      const hashedPassword = await bcrypt.hash(password, 10)
      console.log(hashedPassword)
     

      const newUser = await User.create({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword
      });
      console.log(newUser)
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.log(error)
      res.status(500).json({ success: false, message: error });
    }
  });
  export default router;