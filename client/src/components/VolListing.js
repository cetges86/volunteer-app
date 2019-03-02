import React, { Component } from 'react';
import "../pages/main.css"
import API from "../util/API";
import VolArray from "./VolArray";


class VolListing extends Component {

    state = {
        value: true
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.volunteers.length !== prevProps.volunteers.length) {
          this.forceUpdate();
        }
      }

    handleClick = () => {
        let volunteer = {
            email: sessionStorage.getItem("userName"),
            name: sessionStorage.getItem("name")
        };
        // $('#datepicker').datepicker().change(evt => {
        //     var selectedDate = $('#datepicker').datepicker('getDate');
        //     var now = new Date();
        //     now.setHours(0,0,0,0);
        //     if (selectedDate < now) {
        //       console.log("Selected date is in the past");
        //     } else {
        //       console.log("Selected date is NOT in the past");
        //     }
        //   });
        API.signUpForPost(this.props._id, volunteer)
            .then(res => {
                console.log(res);
                this.setState({
                     value: false
                    })
            })
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
                <br/>
                <button className="small-btn" disabled={!this.state.value || this.props.volunteers.length >= this.props.peopleNeeded} onClick={this.handleClick}>{this.props.volunteers.length >= this.props.peopleNeeded ? 'Full' : 'Sign Up'}</button>
            </li>
        )
    }

}

export default VolListing;
