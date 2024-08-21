const express = require("express");
const router = express.Router()
const {signup, signin} = require('../controller/authcontroller')
const {showAllBlogs, createBlog,deleteBlog, getUserBlogs} = require('../controller/blogcontroller')

router.post( "/signup",signup)
router.post( "/signin",signin)

router.get("/allblogs", showAllBlogs)
router.post("/createblog", createBlog)
router.get("/getuserblogs/:id", getUserBlogs)
router.delete("/deleteblog/:id", deleteBlog)




module.exports = router;
