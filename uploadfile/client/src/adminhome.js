import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
  return (
    <>
      <div className="adminhome">
        <h1>AdminHome</h1>
        <Link to="/AdminAddBook" className="admin-link">Add Book</Link>
        <Link to="/GetBooks" className="admin-link">View Book</Link>
      </div>
    </>
  );
}
