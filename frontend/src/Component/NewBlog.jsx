import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import backend from "../axios/backend";
import {jwtDecode} from "jwt-decode";

const Newblog = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        console.log('decodedToken', userId)
    const [formData, setFormData] = useState({
        title: '',
        image:'',
        description:'',
        user: userId
    })


const handleChange = (e) => {    
    setFormData({...formData, [e.target.name]: e.target.value})
    }        

const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        const response = await axios.post(`${backend}/createblog`, formData)
        console.log(response.data)
        toast.success("Blog Created", {
            onClose: () => navigate("/myblogs"),
          });
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong')
            }     
    }

  return (
    <div>
  <Container className='mt-5'>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formTitle' className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Enter Title'
            />
            </Form.Group>
            <Form.Group controlId='formImage' className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                type='text'
                name='image'
                value={formData.image}
                onChange={handleChange}
                placeholder='Enter image URL'
                />
            </Form.Group>
            <Form.Group contrlId='formDescription' className='mb-3'>  
                <Form.Label>Description</Form.Label>
                <Form.Control
                as='textarea'
                name='description'
                value={formData.description}
                onChange={handleChange}
                rows={3}
                placeholder='Enter blog description'
                />                
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
              </Form>
  </Container>
  <ToastContainer />
    </div>  
  )
}

export default Newblog