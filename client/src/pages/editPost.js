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
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper signup-form">
                <h4>Author: {this.props.author}</h4>
                <label>Event Title</label>
                <input className="signup-inputs" type="text" placeholder="Title"
                    onChange={event => this.setState({ title: event.target.value })} />
                <label>Date</label>
                <input className="signup-inputs" type="date" placeholder="Date"
                    onChange={event =>
                        this.setState({ date: event.target.value })} ></input>
                <label>Number of Helpers Needed</label>
                <input className="signup-inputs" type="number" placeholder="Number of Volunteers Needed"
                    onChange={event => this.setState({ peopleNeeded: event.target.value })} ></input>
                <label>Description</label>
                <textarea className="signup-inputs" placeholder="Description of event/what is needed"
                    onChange={event => this.setState({ description: event.target.value })}></textarea>

                <button className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>Add Posting</button>
            </div>
        )

    }


}
export default editPost;