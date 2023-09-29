import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function UserSignin() {
    const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint for user registration
      const response = await axios.post('http://localhost:4000/UserRegister', formData);
      alert("User successfully Register")
         navigate('/UserHome')
      // Handle the response, e.g., show a success message
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>User SignUp page</h1>
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter the name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />
        <label>Email:</label>
        <input
          type="email"
          placeholder="enter the email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="enter the password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
