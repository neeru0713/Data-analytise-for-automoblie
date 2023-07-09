const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    console.log("inside register api");
    // Extract user details from the request body
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "blogapp_secret");

    newUser.token = token;
    await newUser.save();

    // Respond with success message
    
    console.log(req.user)
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("inside login api");
    // Extract user details from the request body
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      if (existingUser.password === password) {
        const token = jwt.sign({ userId: existingUser._id }, "blogapp_secret");
        existingUser.token = token;
        await existingUser.save();
        
        res
          .status(200)
          .json({ message: "User login successfully", existingUser });
      } else {
        res.status(400).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(400).json({ message: "Incorrect email" });
    }
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;