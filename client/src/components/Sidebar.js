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
        console.log(loggedInUser);
        API.getUser(loggedInUser).then(res => {
            console.log(res.data);
            //sessionStorage.setItem("userRole", res.data.role)
            this.setState({name: res.data.name, position:res.data.role, imageURL:res.data.photo})
        })
    }



    render(){
        return (
            <div className="sidebar">
                    <img className ="img-thumbnail" src={this.state.imageURL}></img>
                    <p>
                       <span id="sidebar-name">{this.state.name}</span> 
                    <br/>
                        {this.state.position}
                    </p>
            </div>

        )
    }
}


export default Sidebar;