import React, { Component } from 'react';
import "../pages/main.css"
import API from "../util/API";
import VolArray from "./VolArray";


class VolListing extends Component {

    state = {
        value: true,
        newDate: ''
    }

    // componentDidMount = () => {
    //     //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //     let formattedDate = new Date(this.props.date);
    //     formattedDate.toLocaleDateString('en-US');
    //     console.log(formattedDate);
    // }

    handleClick = () => {
        let volunteer = {
            email: sessionStorage.getItem("userName"),
            name: sessionStorage.getItem("name"),
            photo:sessionStorage.getItem("photo")
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
                <h4>{this.props.title}  by {this.props.author}</h4>
                <h5>Date of Event{this.props.date.substring(0, 15)}</h5>
                <ul>
                    <li>Number of Helpers: {this.props.peopleNeeded}</li>
                    <li>{this.props.description}</li>
                    <li>Volunteers Signed Up:</li>
                    <br />
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
