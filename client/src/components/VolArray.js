import React, { Component } from 'react';

class VolListing extends Component {

    render() {
        return (
            <li><a href={"mailto:"+ this.props.email}>{this.props.name}</a></li>
        )}
}

export default VolListing;
