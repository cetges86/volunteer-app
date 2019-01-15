import React, { Component } from 'react';
import "../pages/main.css"

class VolListing extends Component {



    render() {
        return (
            <li className="vol-post">
                <h4>{this.props.author} | {this.props.title}  |  {this.props.date.substring(0, 10)}</h4>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                </ul>
                <button>Sign Up!</button>
            </li>
        )
    }

}

export default VolListing;
