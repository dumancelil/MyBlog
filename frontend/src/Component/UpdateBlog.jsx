import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import backend from "../axios/backend";

const UpdateBlog = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState({
        title: '',
        description: '',
        image: ''
    })
    const [originalData, setOriginalDa] = useState({})
    useEffect(() => {
        const fetchBlogDetails = async() => {
            try {
                const response = await backend.get(`${backend}/getblogpost/${id}`)
                    setBlogData(response.data)
                    setOriginalDa(response.data)
                    console.log(response.data)
                    } catch (error) {
                        console.error(error)
                        }           
        }
        fetchBlogDetails()
    },[id])
    const handleChange = (e) => {
        setBlogData((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value
        })) 
    }

    const handleUpdate = async(e) => {
        e.preventDefault()
        const updateFields = {}
        for (let key in blogData) {
            if(blogData[key] !== originalData[key]) {
                updateFields[key] = blogData[key]
            }
        }
        try {
            const response = await axios.put(`${backend}/updateblog/${id}`, updateFields)
            toast.success('Blog post updated successfully')
            navigate('/myblogs')
            } catch (error) {
                console.error(error)
                toast.error('Failed to update blog post')
            }  
    }
  return (
    <Container>
        <h2>Update Post</h2>
        <Form onSubmit={handleUpdate}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleChange}
                />

            </Form.Group>
            <Form.Group controlId='formImage'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                type="text"
                name="image"
                value={blogData.image}
                onChange={handleChange}  
                />                  
            </Form.Group>
            <Form.Group controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                name="description"
                value={blogData.description}
                onChange={handleChange}  
                row={3}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Save Changes
            </Button>            
        </Form>
        <ToastContainer/>
    </Container>
  )
}

export default UpdateBlog