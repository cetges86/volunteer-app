import React, { Component } from "react";
import API from "../util/API";
import "../pages/main.css"

class Sidebar extends Component {

    state = {
        name:"",
        position:"",
        imageURL:""
    }

    componentDidMount = () => {
        let loggedInUser = sessionStorage.getItem("userName");
        API.getUser(loggedInUser).then(res => {
            console.log(res.data);
            this.setState({name: res.data.name, position:res.data.role, imageURL:res.data.photo})
        })
    }



    render(){
        return (
            <div className="sidebar">
                    <img alt="Profile Img" className ="img-thumbnail" src={this.state.imageURL}></img>
                    <p>
                       {this.state.name}
                    <br/>
                    <span id="sidebar-role">{this.state.position}</span>
                    </p>
            </div>

        )
    }
}


export default Sidebar;