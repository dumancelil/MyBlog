import React, { useState, useEffect } from "react";
import { Container, Button,Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import ShowMoreText from 'react-show-more-text';
import axios from "axios";
import backend from "../axios/backend";

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([])

  const getAllBlogs = async() => {
    try {
      const response = await axios.get(`${backend}/allblogs`)
      setBlogs(response.data)
      } catch (error) {
        console.error(error);
        }
  }
useEffect(() => {
    getAllBlogs()
  },[])

  return <div>
    <Container>
    <h1>All Blogs</h1>
      <Row>
        <Col xs={12} className='d-flex'>
      
        {blogs.map((blog, index) => (
          <Card key={index}  style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Img src={blog.image}/>
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
            </Card.Body>
          </Card>
        ))}
        </Col>
      </Row>
    </Container>
  </div>;
};

export default HomeScreen;