import React, { Component } from 'react';

class VolListing extends Component {

    render() {
        return (
            <li className="vol-list">
                <img></img>
                <a href={"mailto:" + this.props.email}>&nbsp;{this.props.name}&nbsp;</a>
            </li>
        )
    }
}

export default VolListing;
