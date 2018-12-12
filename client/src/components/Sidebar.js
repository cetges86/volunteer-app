import React, { Component } from "react";
import API from "../util/API";

class Sidebar extends Component {

    state = {
        name:"",
        position:"",
        imageURL:""
    }

    componentDidMount = () => {
        let loggedInUser = localStorage.getItem("userName");
        console.log(loggedInUser);
        API.getUser(loggedInUser).then(res => {
            console.log(res.data);
            this.setState({name: res.data.name, position:res.data.role})
        })
    }



    render(){
        return (
            <div className="sidebar">
                <ul>
                    <img src="https://fillmurray.com/200/200"></img>
                    <li>
                        {this.state.name}
                    </li>
                    <li>
                        {this.state.position}
                    </li>
                </ul>
            </div>

        )
    }
}


export default Sidebar;