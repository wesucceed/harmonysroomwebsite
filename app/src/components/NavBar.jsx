import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img className="Logo"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/programs">Programs & Curriculum</Link></li>
            </ul>
            <a to=""><button>Register</button></a>
        </nav>
    )
}

export default NavBar;


