import React from 'react';
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
            <nav className="nav-wrapper grey s12">
                <h4 className="container">
                    <Link to="/" className="left"><h5>Weirdness Calculator</h5></Link>
                </h4>
            </nav>
    );
}

export default Navbar