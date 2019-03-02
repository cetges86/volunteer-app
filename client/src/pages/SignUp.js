import React, { Component } from "react";
import API from "../util/API";
import "./main.css";
import classNames from 'classnames';
import Dropzone from "react-dropzone";
import axios from "axios";
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/volunteer-app/image/upload'
const CLOUDINARY_UPLOAD_PRESET = "lgrrdhwa"


class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        role: '',
        imgURL: 'https://fillmurray.com/200/200',
        uploaded: false
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        const image = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            console.log(response);
            console.log(response.data.secure_url);
            this.setState({
                imgURL: response.data.secure_url,
                uploaded: true
            });
        }).catch(err => {
            console.log(err);
        });
    }


    handleSubmit = () => {
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            photo: this.state.imgURL
        }

        API.createUser(newUser).then((res => {
            console.log(res);
            sessionStorage.setItem("userName", res.data.email)
            sessionStorage.setItem("name", res.data.name)
            sessionStorage.setItem("userRole", res.data.role)

            this.props.history.push('/main');
        }))
            .catch(err => console.log(err));

        console.log(newUser);
    }



    render() {

        return (
            <div>
                <h1 className="center" id="signup-banner">Sign Up to Be a Good Helper</h1>
                {this.state.uploaded ? <div className="center"><img className='img-thumbnail' src={this.state.imgURL} alt="profile"></img></div>
                    :
                    <Dropzone onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                            <p>Drop images here...</p> :
                                            <p>Try dropping a picture here to make it your profile picture! Or click to find an image to use!</p>
                                    }
                                    <br/>
                                </div>
                            )
                        }}
                    </Dropzone>
                }
                <div className="wrapper signup-form">
                    

                    <input className="signup-inputs" type="text" placeholder="Name"
                        onChange={event => this.setState({ name: event.target.value })} />
                    <input className="signup-inputs" type="email" placeholder="Email Address"
                        onChange={event => this.setState({ email: event.target.value })} ></input>
                    <input className="signup-inputs" type="password" placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })} ></input>
                    <select onChange={event => this.setState({ role: event.target.value })} className="signup-inputs">
                        <option defaultValue="true">Select Your Role</option>
                        <option>Teacher</option>
                        <option>Parent/Volunteer</option>
                    </select>
                    <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Sign Up</button>
                    <br/>
                </div>

            </div>
        )
    }
}


export default SignUp;