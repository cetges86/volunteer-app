import React, { Component } from "react";
import "./main.css";

class SignUp extends Component {

    componentDidMount() {
        this.fileUpload();
    }

    fileUpload = () =>{
        var fileUpload = document.getElementById("photo-file-input");
        let file = {};
        fileUpload.addEventListener('change',function(event){
            file = event.target.files[0];
            console.log(file);
        })
    }



    render() {
        return (
            <div>
                <h1 className="center" id="signup-banner">Sign Up to Be a Good Helper</h1>
                <div className="center img-thumbnail"><img src="https://via.placeholder.com/150" alt="profile"></img></div>
                <div className="wrapper signup-form">
                    <input id="photo-file-input" className="center" type="file"></input>
                    <input className="signup-inputs" type="text" placeholder="Name"></input>
                    <input className="signup-inputs" type="email" placeholder="Email Address"></input>
                    <input className="signup-inputs" type="password" placeholder="password"></input>
                    <select className="signup-inputs">
                        <option defaultValue>Select Your Role</option>
                        <option>I'm a Teacher</option>
                        <option>I'm a Parent/Volunteer</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SignUp;