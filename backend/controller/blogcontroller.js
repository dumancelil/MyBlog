const Blog = require('../models/blog')

const showAllBlogs = async(req,res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
        } catch (error) {
            res.status(500).json({ message: error.message })
            }
}

const createBlog = async(req,res) => {
    try {
        const {title, image, description, user} = req.body
        const newBlog = new Blog(req.body)
        await Blog.create(newBlog)
        res.send('Blog Created successfully')
        } catch (error) {
            res.status(500).json({ message: error.message })
            }
}
const deleteBlog = async(req,res) => {
    try {
        const id = req.params.id
        const delBlog = await Blog.findByIdAndDelete(id)
        res.json('Blog deleted successfully')
        } catch (error) {
            res.status(500).json({ message: error.message })
            }
}

const getUserBlogs = async(req,res) => {
    try {
        const id = req.params.id
        const userBlogs = await Blog.find({user: id})
        res.json(userBlogs)
        } catch (error) {
            res.status(500).json({ message: error.message })
            }
}

module.exports = {showAllBlogs, createBlog,deleteBlog, getUserBlogs}