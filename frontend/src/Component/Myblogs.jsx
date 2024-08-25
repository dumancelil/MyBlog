import React, { useState, useEffect } from "react";
import { Container,Card, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import ShowMoreText from 'react-show-more-text';
import axios from "axios";
import backend from "../axios/backend";
import {jwtDecode} from "jwt-decode";

const Myblogs = () => {
    const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()
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
      toast.success('Blog Deleted')
      getUserBlogs()
      } catch (error) {
        console.error(error);
        }
        }
  const updateUserBlog = async(blog) => {
     navigate(`/updateblog/${blog._id}`) 
        }
        
        useEffect(() => {
          getUserBlogs()
          }, [])
          

        
  return (
    <>
    <div><h1>Myblogs</h1></div>
<Container>
  <Row>
    {blogs.map((blog) => (
      <Col key={blog._id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog.image} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
            <ShowMoreText
              lines={1}
              more="Show more"
              less="Show less"
              className="fs-4 wrapper-class-2 showMore"
              anchorClass="show-more-link"
             
              expanded={false}
              width={800}
            >
              {blog.description}
              </ShowMoreText>
              </Card.Text>
            <Button onClick={() => deleteUserBlog(blog._id)}>Delete</Button>
            <Button onClick={() => updateUserBlog(blog)}>Edit</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
<ToastContainer/>
    </>
  )
}

export default Myblogs