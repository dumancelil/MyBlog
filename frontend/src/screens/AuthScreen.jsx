import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backend from "../axios/backend";

const AuthScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backend}/signin`, { email, password })
      localStorage.setItem('token', response.data.token)
      navigate('/')
      window.location.reload()
      } catch (error) {
        console.error(error)
        }
  }
  
  return (
<>
<Container className="p-5">
  <Form onSubmit={handleSubmit}>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>Email</Form.Label>
      <Col sm={10}>
      <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </Col>
    </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col sm={10}>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Button type='submit'>
        Log In
      </Button>
      
  </Form>
</Container>
</>
  )
};

export default AuthScreen;
