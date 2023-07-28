import React from "react";
import {Link} from 'react-router-dom';
import logo from "../../src/assets/logo.png"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src = {logo} className="Logo"></img>
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


