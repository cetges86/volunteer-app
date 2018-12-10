import React, { Component } from 'react';
import "../pages/main.css"

class Listing extends Component {



    render() {
        return (
            <li className="vol-post">
                <h4>{this.props.title}  |  {this.props.date.substring(0, 10)}</h4>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                </ul>
                <button>Edit</button><button>Delete</button>
            </li>
        )
    }

}

export default Listing;
