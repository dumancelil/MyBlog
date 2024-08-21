const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY

const signup = async(req,res) => {      
    try {
        const { fullname, password, phoneNumber, email } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists)
          return res.status(400).json({ message: "User already exists." });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fullname,
            password: hashedPassword,
            phoneNumber,
            email
            });
            await user.save();
            res.json({ message: "User created successfully." });
            } catch (error) {
                res.status(500).json({ message: "Error creating user." });
                }
            }
            
                const signin = async(req,res) => { 
                    try {
                        const { email, password } = req.body;
                        const user = await User.findOne({ email });
                        if (!user)
                            return res.status(400).json({ message: "User not found." });
                        const isValidPassword = await bcrypt.compare(password, user.password);
                        if (!isValidPassword)
                            return res.status(400).json({ message: "Invalid password." });
                        const token = jwt.sign({ userId: user._id }, SECRET_KEY,
                            { expiresIn: '1h' });
                            res.json({ token, user: { id: user._id } });
                    } catch (error) {
                        console.log(`Error: ${error}`);
                        res.status(500).send({ message: "Unable to Log in..." });
                      }                    
                }
                module.exports = {signup, signin}