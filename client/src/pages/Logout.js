import React, { Component } from "react";
import "./main.css";
import Navbar from "../components/Navbar";

class Logout extends Component {


    componentDidMount() {
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <Navbar />
                <h4>You have been successfully logged out</h4>
                <a href="/">Click here to log back in</a>
            </div>
        )
    }


}
export default Logout