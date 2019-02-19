import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar";
import classNames from 'classnames';
import Dropzone from "react-dropzone";
import "./main.css";
import axios from "axios";
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/volunteer-app/image/upload'
const CLOUDINARY_UPLOAD_PRESET = "lgrrdhwa"


class editUser extends Component {

    state = {
        name: '',
        position: '',
        email: '',
        imageURL: '',
        keepImage: true
    }

    componentDidMount = () => {
        let loggedInUser = sessionStorage.getItem("userName");

        API.getUser(loggedInUser).then(res => {
            console.log(res.data);
            this.setState({
                name: res.data.name,
                email: res.data.email,
                position: res.data.role,
                imageURL: res.data.photo
            })
        })
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
                keepImage: !this.state.keepImage
            });
        }).catch(err => {
            console.log(err);
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {


        // API.editUser(editedUser).then(res => {

        //     console.log(res);
        //     if (this.state.role === "Parent/Volunteer") {

        //         this.props.history.push(`/main`)
        //     } else {
        //         this.props.history.push('/teachermain')
        //     }
        // }
        // )
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.keepImage ? <div className="center"><img className='img-thumbnail' src={this.state.imgURL} alt="profile"></img></div>
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
                                            <p>Drop files here...</p> :
                                            <p>Try dropping some files here, or click to select files to upload.</p>
                                    }
                                </div>
                            )
                        }}
                    </Dropzone>
                }
                <div className="wrapper signup-form">
                    <button onClick={event => this.setState({ keepImage: !this.state.keepImage})}>Upload a New Image</button>
                    <input className="signup-inputs" type="text" placeholder="Name"
                        onChange={event => this.setState({ name: event.target.value })} />
                    <input className="signup-inputs" type="email" placeholder="Email Address"
                        onChange={event => this.setState({ email: event.target.value })} ></input>
                    <select onChange={event => this.setState({ role: event.target.value })} className="signup-inputs">
                        <option defaultValue="true">Select Your Role</option>
                        <option>Teacher</option>
                        <option>Parent/Volunteer</option>
                    </select>
                    <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Sign Up</button>

                </div>
            </div>
        )

    }


}
export default editUser;