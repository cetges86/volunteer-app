import React, { Component } from "react";
import "./main.css";
import logo from "../img/logo.png";
import API from "../util/API";

class Login extends Component {
    state = {
        email: "",
        password: "",
        message: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        let loginInfo = { email: this.state.email, password: this.state.password }
        API.login(loginInfo).then(((res, err) => {
            console.log("response" + JSON.stringify(res.data));
            if (res.request.status === 200) {
                console.log(res.data);
                sessionStorage.setItem("userName", res.data.email)
                sessionStorage.setItem("name", res.data.name)
                sessionStorage.setItem("userRole", res.data.role)
                if (res.data.role === "Teacher") {
                    this.props.history.push(`/teachermain`)
                } else if (res.data.role === "Parent/Volunteer") {
                    this.props.history.push(`/main`)
                }
            }
        }))
            .catch(err => this.setState({ message: "user name or password incorrect" })
            );
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="login-box">
                        <img id="logo" src={logo} alt="logo"></img>
                        <input className="login-inputs" type="text" placeholder="email"
                            onChange={event => this.setState({ email: event.target.value })}></input>
                        <input className="login-inputs" type="password" placeholder="password"
                            onChange={event => this.setState({ password: event.target.value })}></input>
                        <p>{this.state.message}</p>
                        <div className="buttons">
                            <button><a href="/signup">New? Sign Up Here</a></button>
                            <button onClick={this.onSubmit}><a href="/main">Log In</a></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;