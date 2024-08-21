import React, { useState, useEffect } from "react";
import { Container,Card, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import axios from "axios";
import backend from "../axios/backend";
import {jwtDecode} from "jwt-decode";

const Myblogs = () => {
    const [blogs, setBlogs] = useState([])

 const getUserBlogs = async() => {
    const token = localStorage.getItem('token')
    console.log(token)
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        console.log('decodedToken', userId)
    
  try {
    const response = await axios.get(`${backend}/getuserblogs/${userId}`)
      setBlogs(response.data)
      } catch (error) {
        console.error(error);
        }          
 } 

 const deleteUserBlog = async(id) => {
  try {
    const response = await axios.delete(`${backend}/deleteblog/${id}`)
      setBlogs(blogs.filter(blog => blog.id !== id))
      } catch (error) {
        console.error(error);
        }
        }
        
        useEffect(() => {
          getUserBlogs()
          }, [])
          

        
  return (
    <>
    <div>Myblogs</div>
<Container>
  <Row>
    {blogs.map((blog) => (
      <Col key={blog._id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog.image} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.content}</Card.Text>
            <Button onClick={() => deleteUserBlog(blog._id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
    
    </>
  )
}

export default Myblogs