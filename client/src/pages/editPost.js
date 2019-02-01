import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar"
import "./main.css";
import Sidebar from "../components/Sidebar";

class editPost extends Component {

    state = {
        post: {}
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id)
        API.getPostById(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({ post: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper signup-form">
                <h4>Author: {this.props.author}</h4>
                <label>Event Title</label>
                <input className="signup-inputs" type="text" placeholder="Title"
                    value={this.state.post.title}
                    onChange={event => this.setState({ title: this.state.post.title })} />
                <label>Date</label>
                <p>Current Date: {this.state.post.date}</p>
                <input className="signup-inputs" type="date" placeholder="Date"
                    onChange={event =>
                        this.setState({ date: this.state.post.date })} ></input>
                <label>Number of Helpers Needed</label>
                <input className="signup-inputs" type="number" placeholder="Number of Volunteers Needed"
                    value={this.state.post.peopleNeeded}
                    onChange={event => this.setState({ peopleNeeded: this.state.post.peopleNeeded })} ></input>
                <label>Description</label>
                <textarea className="signup-inputs" placeholder="Description of event/what is needed"
                    value={this.state.post.description}

                    onChange={event => this.setState({ description: this.state.post.description })}></textarea>

                <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Add Posting</button>
            </div>
        )

    }


}
export default editPost;