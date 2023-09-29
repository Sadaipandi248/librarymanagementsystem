import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
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
      const response = await axios.post('http://localhost:4000/addBook', formData);

      console.log('Response:', response.data);

      setFormData({
        title: '',
        author: '',
        isbn: '',
      });
      alert("book Added successfull")
    } catch (error) {
     
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add Book</h1>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter the title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        /><br /><br />
        <label>Author:</label>
        <input
          type="text"
          placeholder="Enter the author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        /><br /><br />
        <label>ISBN:</label>
        <input
          type="text"
          placeholder="Enter the ISBN"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
