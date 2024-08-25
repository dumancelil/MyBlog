const express = require("express");
const router = express.Router()
const {signup, signin} = require('../controller/authcontroller')
const {showAllBlogs, createBlog,deleteBlog, getUserBlogs,updateUserBlogs, getBlogPost} = require('../controller/blogcontroller')

router.post( "/signup",signup)
router.post( "/signin",signin)

router.get("/allblogs", showAllBlogs)
router.post("/createblog", createBlog)
router.get("/getuserblogs/:id", getUserBlogs)
router.delete("/deleteblog/:id", deleteBlog)
router.put("/updateblog/:id", updateUserBlogs)
router.get("/getblogpost/:id", getBlogPost)



module.exports = router;
