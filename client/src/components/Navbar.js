import React, { Component } from 'react';
import "../pages/main.css"
import "./navbar.css";

class Navbar extends Component {

    state = {
        role: ""
    }

    componentDidMount() {
        let userRole = sessionStorage.getItem("userRole");
        this.setState({ role: userRole });
    }

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
                    <a className="link" href="/"><h2>Such Good Helpers</h2></a>
                </div>
                {(this.state.role === "Teacher")
                    ? <div id="myTopnav" className="navbar-links">
                        <a className="links-right" href="/teachermain">My Posts</a>
                        <a className="links-right" href="/createpost">New Post</a>
                        <a className="links-right" href="/main">View All Postings</a>
                        <a className="links-right" href="/myaccount">My Account</a>
                        <a className="links-right" href="/logout">Logout</a>
                    </div>
                    : <div id="myTopnav" className="navbar-links">
                        {/* <a className="links-right" href="/main">Main</a> */}
                        {/* <a className="links-right" href="/createpost">New Post</a> */}
                        <a className="links-right" href="/main">View All Postings</a>
                        <a className="links-right" href="/myaccount">My Account</a>
                        <a className="links-right" href="/logout">Logout</a>
                    </div>}
            </nav>
        )
    }
}

export default Navbar;