import React, { Component } from "react";
import "./main.css";
import logo from "../img/logo.png";

class Login extends Component {



    render() {

        return (
            <div>
                <div className="wrapper">
                    <div className="login-box">
                    <img id="logo" src={logo} alt="logo"></img>
                        <input className="login-inputs" type="text" placeholder="email"></input>
                        <input className="login-inputs" type="password" placeholder="password"></input>
                        <div className="buttons">
                            <button><a href="/signup">New? Sign Up Here</a></button>
                            <button><a href="/main">Log In</a></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;