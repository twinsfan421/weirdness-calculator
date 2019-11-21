import React from 'react';
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="row">
            <nav className="nav-wrapper grey">
                <h4 className="container">
                    <Link to="/" className="left"><h5>Weirdness Calculator</h5></Link>
                </h4>
            </nav>
        </div>
    );
}

export default Navbar