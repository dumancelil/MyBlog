const express = require("express");
const mongoose = require ("mongoose");
const User = require ("../models/model");
const bcrypt = require ("bcrypt");
const router = express.Router();

router.post("/signUp", async (req, res)=>{
try{
    console.log (req.body)
    const {fullname, password, phoneNumber, email} = req.body;

    const userExists = await User.findOne ({ email })
    if (userExists)
        return res.status(400).json({message:"User already exists."})
    
    const hashedPasword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({
        fullname,
        email,
        password: hashedPasword,
        phoneNumber,
    })

    return res.status(201).json(createdUser);
}catch (error){
    console.log(error)
    return res.json ({message:"Create User Failed."})
}
})





module.exports = router