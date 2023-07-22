import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <img className="Logo"></img>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Programs & Curriculum</a></li>
                <li><a>Our Story</a></li>
                <li><a>Team</a></li>
            </ul>
            <a><button>Register</button></a>
        </div>
    )
}

export default Header;