import React, { Component } from 'react';
import "../pages/main.css"
import API from "../util/API";


class VolListing extends Component {

    handleClick = () => {
        console.log(this.props.volunteers[0]);
        let volunteer = sessionStorage.getItem("userName");
        API.editPost(this.props._id, volunteer)
            .then(res => {
                console.log(res);
            })
    }


    render() {
        return (
            <li className="vol-post">
                <h4>{this.props.author} | {this.props.title}  |  {this.props.date.substring(0, 10)}</h4>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                </ul>
                <button onClick={this.handleClick}>Sign Up!</button>
            </li>
        )
    }

}

export default VolListing;
