import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Lendingbook() {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [lentBooks, setLentBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then((response) => {
        setAvailableBooks(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  function lendbook(index, title, author, isbn) {
    const updatedAvailableBooks = [...availableBooks];
    const lentBook = updatedAvailableBooks.splice(index, 1)[0];

    setAvailableBooks(updatedAvailableBooks);
    alert(`${title} by ${author} (ISBN: ${isbn}) successfully lent.`);

    setLentBooks((prevLentBooks) => [...prevLentBooks, lentBook]);
  }

  function returnBook(index,title, author, isbn) {
    const returnedBook = lentBooks[index];

    const updatedLentBooks = [...lentBooks];
    updatedLentBooks.splice(index, 1);
    setLentBooks(updatedLentBooks);
    alert(`${title} by ${author} (ISBN: ${isbn}) successfully Return.`);

    setAvailableBooks((prevAvailableBooks) => [...prevAvailableBooks, returnedBook]);
  }

  return (
    <>
      <h1>Lendingbooks</h1>
      <div>
        <h2>Available Books</h2>
        <ul>
          {availableBooks.map((book, index) => (
            <li key={book._id}>
              <strong>Title:</strong> {book.title}<br />
              <strong>Author:</strong> {book.author}<br />
              <strong>ISBN:</strong> {book.isbn}<br />
              <button onClick={() => lendbook(index, book.title, book.author, book.isbn)}>Lend Book</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Lent Books</h2>
        <ul>
          {lentBooks.map((book, index) => (
            <li key={book._id}>
              <strong>Title:</strong> {book.title}<br />
              <strong>Author:</strong> {book.author}<br />
              <strong>ISBN:</strong> {book.isbn}<br />
              <button onClick={() => returnBook(index,book.title, book.author, book.isbn)}>Return the book</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
