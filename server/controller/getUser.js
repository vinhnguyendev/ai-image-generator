import express from "express";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "..//mongodb/models/user.js";

dotenv.config();

const router = express.Router();

//post
router.route("/").post(async (req, res) => {
  console.log("Mongodb POST End-point hit! ");
  const data = req.body;
  //login
  if (data.email && data.password) {
    try {
      const { email, password } = data;
      const users = await User.find({ email: email });
      if (!users) return res.status(400).json({ message: "User not found" });

      const { _id, firstname, lastname } = users[0];
      const success = await bcrypt.compare(password, users[0].password);
      if (success) {
        res
          .status(200)
          .json({ sucess: true, data: { _id, firstname, lastname } });
      } else {
        res.status(401).json({ sucess: false, message: "Incorrect password" });
      }
    } catch (error) {
      res.status(500).json({ sucess: false, message: error });
    }

    //signup
  } else if (data.email && data.password && data.firstname && data.lastname) {
    try {
      const { firstname, lastname, email, password } = data;
      console.log(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      const newUser = await User.create({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword,
      });
      console.log(newUser);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error });
    }
  }
});
export default router;
