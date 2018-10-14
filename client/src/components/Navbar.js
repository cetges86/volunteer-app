import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {

    toggleNavMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "navbar-links") {
            x.className += " responsive";
        } else {
            x.className = "navbar-links";
        }

    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-banner">
                    <a className="link" href="/"><h2>Voluntary</h2></a>
                </div>
                <div id="myTopnav" className="navbar-links">
                    <a className="links-right" href="/createpost">I Need Help!</a>
                    <a className="links-right" href="/all">View All Postings</a>
                    <a className="links-right" href="/myaccount">My Account</a>
                    <a className="links-right" href="/logout">Logout</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;