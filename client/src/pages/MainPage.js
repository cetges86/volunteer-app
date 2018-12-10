import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar"
import Listing from "../components/Listing"
import "./main.css";
import Sidebar from "../components/Sidebar";

class MainPage extends Component {

    state = {
        posts: []
    }

    componentDidMount = () => {
        API.getAllPosts().then(res => {
            console.log(res.data);
            this.setState({posts:res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-layout">
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <h1>My Posts</h1>
                        <ul>
                        {this.state.posts.map(post => {
                    return <Listing
                        key={post._id}
                        {...post} />
                })}
                        </ul>
                    </div>
                </div>
                
            </div>



        )


    }

}


export default MainPage;