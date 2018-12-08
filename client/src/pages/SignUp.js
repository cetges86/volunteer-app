import React, { Component } from "react";
import API from "../util/API";
import "./main.css";

class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        role: "",
        profileImg: null
    }

    fileSelect = (event) => {
        this.setState({ profileImg: event.target.files[0]});
        console.log(this.state.profileImg)
        API.uploadImage(this.state.profileImg);
    }

    handleSubmit = () => {
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            profileImg: this.state.profileImg
        }

        console.log(newUser);
    }



    render() {
        return (
            <div>
                <h1 className="center" id="signup-banner">Sign Up to Be a Good Helper</h1>
                <div className="center img-thumbnail"><img src={this.state.profileImg} alt="profile"></img></div>
                <div className="wrapper signup-form">
                    <input id="photo-file-input" className="center" type="file"
                        onChange={this.fileSelect}></input>
                    <input className="signup-inputs" type="text" placeholder="Name"
                        onChange={event => this.setState({ name: event.target.value })} />
                    <input className="signup-inputs" type="email" placeholder="Email Address"
                        onChange={event => this.setState({ email: event.target.value })} ></input>
                    <input className="signup-inputs" type="password" placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })} ></input>
                    <select onChange={event => this.setState({ role: event.target.value })} className="signup-inputs">
                        <option defaultValue="true">Select Your Role</option>
                        <option>I'm a Teacher</option>
                        <option>I'm a Parent/Volunteer</option>
                    </select>
                    <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Sign Up</button>
                </div>

            </div>
        )
    }
}

export default SignUp;