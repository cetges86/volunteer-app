import React, { Component } from 'react';
import "../pages/main.css"
import VolArray from "./VolArray";

class Listing extends Component {



    render() {
        return (
            <li className="vol-post">
                <h4>{this.props.author} | {this.props.title}  |  {this.props.date.substring(0, 10)}</h4>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                <li>Volunteers Signed Up:</li>
                    <ul>
                        {this.props.volunteers.map((volunteer, i) => {
                            return <VolArray key={i} {...volunteer} />
                        })}
                    </ul>
                </ul>
                <button>Edit</button><button>Delete</button>
            </li>
        )
    }

}

export default Listing;
