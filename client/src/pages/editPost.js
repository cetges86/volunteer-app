import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar"
import "./main.css";

class editPost extends Component {

    state = {
        author: '',
        title: "",
        date: "",
        peopleNeeded: 0,
        description: ""
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id)
        API.getPostById(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({
                    author: res.data.author,
                    title: res.data.title,
                    date: res.data.date,
                    peopleNeeded: res.data.peopleNeeded,
                    description: res.data.description,
                });

            })
            .catch(err => console.log(err));
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
        let editedPost = {
            author: this.state.author,
            title: this.state.title,
            date: this.state.date.substring(0, 10),
            peopleNeeded: parseInt(this.state.peopleNeeded, 10),
            description: this.state.description
        }

        API.editPost(this.props.match.params.id, editedPost).then(res => {

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
                <div className="wrapper signup-form">
                    <h4>Author : {this.state.author}</h4>
                    <label>Event Title</label>
                    <input className="signup-inputs" type="text" placeholder="Title"
                        value={this.state.title || ''}
                        name="title"
                        onChange={this.handleInputChange} />
                    <label>Date</label>
                    <p>Current Date: {this.state.date.substring(0, 10) || ''}</p>
                    <input className="signup-inputs" type="date" placeholder="New Date"
                        name="date"
                        onChange={this.handleInputChange} ></input>
                    <label>Number of Helpers Needed</label>
                    <input className="signup-inputs" type="number" placeholder="Number of Volunteers Needed"
                        value={this.state.peopleNeeded || ''}
                        name="peopleNeeded"
                        onChange={this.handleInputChange} ></input>
                    <label>Description</label>
                    <textarea className="signup-inputs" placeholder="Description of event/what is needed"
                        value={this.state.description || ''}
                        name="description"
                        onChange={this.handleInputChange}></textarea>

                    <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Finish Edit</button>
                </div>
            </div>
        )

    }


}
export default editPost;