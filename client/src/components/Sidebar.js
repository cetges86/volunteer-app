import React, { Component } from "react";
import API from "../util/API";

class Sidebar extends Component {



    render(){
        return (
            <div className="sidebar">
                <ul>
                    <img src="https://fillmurray.com/200/200"></img>
                    <li>
                        Name
                    </li>
                    <li>
                        Position
                    </li>
                </ul>
            </div>

        )
    }
}


export default Sidebar;