import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './library.css';

export default function Home() {
  return (
    <>
      <Card style={{ width: '45rem' }} className='form'>
        <Card.Body>
          <Card.Title className="card-title">Library Management System</Card.Title>
          {/* Use Link to navigate to AdminSignUp route */}
          <Link to="/AdminSignUp" className="button admin-button">
            <Button>Admin SignUp</Button>
          </Link>
          {/* Use Link to navigate to UserSignUp route */}
          <Link to="/UserSignUp" className="button user-button">
            <Button>User SignUp</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
