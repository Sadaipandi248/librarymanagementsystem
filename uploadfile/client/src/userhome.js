import React from 'react';
import { Link } from 'react-router-dom';
export default function UserHome(){
    return(
        <>
   <h1>UserHome</h1>
   <Link to="/lendingbook" className="admin-link">lending books</Link>
        </>
    )
}