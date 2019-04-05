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
                <h4>{this.props.title}</h4>
                <h5>Date of Event: {this.props.date.substring(0, 15)}</h5>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                    <li>Volunteers Signed Up:</li>
                    <br />
                    <ul>
                        {this.props.volunteers.length === 0 ? <li>No One has signed up yet</li> :
                            this.props.volunteers.map((volunteer, i) => {
                                return <VolArray key={i} {...volunteer} />
                            })}
                    </ul>
                    {this.props.volunteers.length >= this.props.peopleNeeded
                    ? <button className="small-btn">Email Volunteers</button>
                    : <div></div>}
                </ul>
                <br/>
                <a href={`edit/${this.props._id}`}><button className="small-btn">Edit</button></a><button className="small-btn" onClick={this.deletePost}>Delete</button>
            </li>
        )
    }

}

export default Listing;
