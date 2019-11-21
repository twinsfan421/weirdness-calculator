import React from 'react';
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="row">
            <nav className="nav-wrapper grey">
                <div className="container">
                    <Link to="/" className="left">Weirdness Calculator</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar