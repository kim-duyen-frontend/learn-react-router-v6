import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <Link to="/home">Home</Link>
            </div>
        </div>
    );
}

export default Navbar;