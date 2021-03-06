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
        id:'',
        name: '',
        role: '',
        email: '',
        imageURL: '',
        keepImage: true
    }

    componentDidMount = () => {
        let loggedInUser = sessionStorage.getItem("userName");

        API.getUser(loggedInUser).then(res => {
            console.log(res.data);
            this.setState({
                id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
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
                imageURL: response.data.secure_url,
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
        let editedUser = {
            email: this.state.email,
            name: this.state.name,
            role: this.state.role,
            photo: this.state.imageURL
        }

        let userID = this.state.id;
        console.log(userID)
        API.editUser(userID, editedUser).then(res => {

            console.log(res);
            if (this.state.role === "Parent/Volunteer") {

                this.props.history.push(`/main`)
            } else {
                this.props.history.push('/teachermain')
            }
        }
        )
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.keepImage ? <div className="center"><img className='img-thumbnail' src={this.state.imageURL} alt="profile"></img></div>
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
                                </div>
                            )
                        }}
                    </Dropzone>
                }
                <div className="wrapper signup-form">
                    <button className="small-btn" onClick={event => this.setState({ keepImage: !this.state.keepImage })}>Upload a New Image</button>
                    <input className="signup-inputs" type="text" placeholder="Name"
                        value={this.state.name || ''}
                        name="name"
                        onChange={this.handleInputChange} />
                    <input className="signup-inputs" type="email" placeholder="Email Address"
                        name="email"
                        value={this.state.email || ''}
                        onChange={this.handleInputChange} ></input>
                    <p id="edit-role">Your role of {this.state.role} cannot be changed</p>

                    <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Save Changes</button>
                    <br />
                </div>
            </div>
        )

    }


}
export default editUser;