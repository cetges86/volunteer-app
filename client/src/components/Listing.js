import React, { Component } from 'react';
import "../pages/main.css"
import VolArray from "./VolArray";
import API from '../util/API';

class Listing extends Component {

    deletePost = () => {
        API.deletePost(this.props._id)
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
                    <li>Volunteers Signed Up:</li>
                    <ul>
                        {this.props.volunteers.length === 0 ? <li>No One has signed up yet</li> :
                            this.props.volunteers.map((volunteer, i) => {
                                return <VolArray key={i} {...volunteer} />
                            })}
                    </ul>
                </ul>
                <br/>
                <button className="small-btn"><a href={`edit/${this.props._id}`}>Edit</a></button><button className="small-btn" onClick={this.deletePost}>Delete</button>
            </li>
        )
    }

}

export default Listing;
