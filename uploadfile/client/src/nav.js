import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

export default function Navigation() {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Nav className="me-auto">
            {/* Use Link to navigate to the Home route */}
            <Link to="/" className='logo'>
              <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            {/* Use Link to navigate to AdminSignUp route */}
            <Link to="/AdminSignUp" className="animate-navbar">
              <Nav.Link>AdminSignUp</Nav.Link>
            </Link>
            <Link to="/UserSignUp" className="animate-navbar">
              <Nav.Link>UserSignUp</Nav.Link>
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
