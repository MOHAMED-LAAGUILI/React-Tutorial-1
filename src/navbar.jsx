import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav>
              
                    <Link to="/">Home</Link>
                    <Link to="/About">about</Link>
                    <Link to="/Contact">Contact</Link>
               
            </nav>
        </>
    )
}

