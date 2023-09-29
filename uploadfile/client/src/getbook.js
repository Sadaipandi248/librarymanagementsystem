import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch books from the backend
    axios.get('http://localhost:4000/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <h1>View Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>Title:</strong> {book.title}<br />
            <strong>Author:</strong> {book.author}<br />
            <strong>ISBN:</strong> {book.isbn}<br />
          </li>
        ))}
      </ul>
    </>
  );
}
