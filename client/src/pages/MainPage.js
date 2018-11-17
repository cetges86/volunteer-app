import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar"
import "./main.css";
import Sidebar from "../components/Sidebar";

class MainPage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-layout">
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <ul>
                            <li className="post">
                                volunteer post</li>
                                <li className="post">volunteer post</li>
                                <li className="post">volunteer post</li>
                                <li className="post"> volunteer post</li>
                        </ul>
                    </div>
                </div>
                
            </div>



        )


    }

}


export default MainPage;