import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Header = () => {
const token = !!localStorage.getItem('token')
console.log('this is toke', token)
const navigate = useNavigate()

  return (
    <Navbar className="py-4" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">My Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
        {token ? (
          <>
             <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className="text-white">All Blogs</Nav.Link>
            <Nav.Link as={Link} to='/myblogs'  className="text-white">My Blogs</Nav.Link>
            <Nav.Link as={Link} to='/newblog'  className="text-white">Create new Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Button
            variant="outline-light"
            onClick={() => {
              localStorage.removeItem("token");
              toast.success("Bye Bye", {
                onClose: () => navigate("/"),
              });
            }}
          >
            Log Out
          </Button>
          </>
        ) : (
          <> 
              <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white">All Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Button variant="outline-light me-4">
            <Link className="text-white text-decoration-none" to="/signup">
              Sign Up
            </Link>
          </Button>
           <Button variant="outline-light">
           <Link className="text-white text-decoration-none" to="/login">
             Login
           </Link>
         </Button>
         </>
        )}
      </Container>
      <ToastContainer/>
    </Navbar>
  
  );
};

export default Header;
