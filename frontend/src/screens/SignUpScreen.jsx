import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import axios from "axios";
import backend from "../axios/backend";

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullname, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password and confirmation not match')
      return
    }
    
    try {
      const response = await axios.post(`${backend}/signup`, {
        email,
        password,
        fullname,
        phoneNumber
        })
        console.log(response.data)
        alert("Account created successfully")
        navigate("/login")
        } catch (error) {
          console.error(error)
          if (error.response) {
            console.error('Response Data:', error.response.data);
            console.error('Response Status:', error.response.status);
            console.error('Response Headers:', error.response.headers);
          }
          }
          }
         
  return (
    <>
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col md={6}>
        <h2 className="text-center mb-4">Register Form</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </FormGroup>
            <FormGroup controlId="formBasicfullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              />
              </FormGroup>
              <FormGroup controlId="formBasicphoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
        </Form>
        </Col>
      </Row>
    </Container>
    </>

  )
}
export default SignUpScreen;