import React, { Component } from "react";
import API from "../util/API";
import "./main.css";
import Navbar from "../components/Navbar";

class Post extends Component {

    state = {
        title: "",
        date: "",
        peopleNeeded: 0,
        description: ""
    }

    handleSubmit = () => {
        console.log(this.state);
        let newPost = {
            title: this.state.title,
            date: this.state.date,
            peopleNeeded: parseInt(this.state.peopleNeeded, 10),
            description: this.state.description
        }
        API.addNewPost(newPost).then(((res => {
            console.log(res);
            this.props.history.push(`/main}`)
            //<Redirect to ={`/user/${res.data._id}`}/>
        }))) //go to welcome page 
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h1 className="center" id="signup-banner">Create New Volunteer Posting</h1>

                    <div className="wrapper signup-form">
                        <label>Event Title</label>
                        <input className="signup-inputs" type="text" placeholder="Title"
                            onChange={event => this.setState({ title: event.target.value })} />
                        <label>Date</label>
                        <input className="signup-inputs" type="date" placeholder="Date"
                            onChange={event => this.setState({ date: event.target.value })} ></input>
                        <label>Number of Helpers Needed</label>
                        <input className="signup-inputs" type="number" placeholder="Number of Volunteers Needed"
                            onChange={event => this.setState({ peopleNeeded: event.target.value })} ></input>
                        <label>Description</label>
                        <textarea className="signup-inputs" placeholder="Description of event/what is needed"
                            onChange={event => this.setState({ description: event.target.value })}></textarea>

                        <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Add Posting</button>
                    </div>

                </div>
            </div>
        )
    }
}


export default Post;