import React, { Component } from 'react';
import "../pages/main.css"
import API from "../util/API";
import VolArray from "./VolArray";


class VolListing extends Component {

    state = {
        value: true
    }

    handleClick = () => {
        let volunteer = {
            email: sessionStorage.getItem("userName"),
            name: sessionStorage.getItem("name")
        };

        API.signUpForPost(this.props._id, volunteer)
            .then(res => {
                this.setState({
                    value: false
                })
                this.props.refresh();
            })

        alert("Successfully signed up for listing!")
    }

    render() {
        return (
            <li className="vol-post">
                <h4>{this.props.author} | {this.props.title}  |  {this.props.date.substring(0, 10)}</h4>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                    <li>Volunteers:</li>
                    <ul>
                        {this.props.volunteers.map((volunteer, i) => {
                            return <VolArray key={i} {...volunteer} />
                        })}
                    </ul>
                </ul>
                <br />
                <button className="small-btn"
                    disabled={!this.state.value || this.props.volunteers.length >= this.props.peopleNeeded}
                    onClick={this.handleClick}>
                    {this.props.volunteers.length >= this.props.peopleNeeded ? 'Full' : 'Sign Up'}
                </button>
            </li>
        )
    }

}

export default VolListing;
