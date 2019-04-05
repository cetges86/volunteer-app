import React, { Component } from "react";
import API from "../util/API";
import Navbar from "../components/Navbar"
import VolListing from "../components/VolListing"
import "./main.css";
import Sidebar from "../components/Sidebar";

class MainPage extends Component {

    state = {
        posts: []
    }

    componentDidMount = () => {
        API.getAllPosts().then(res => {
            console.log(res.data);
            this.setState({ posts: res.data })
        })
            .catch(err => console.log(err))
    }

    refreshListings = () => {
        API.getAllPosts().then(res => {
            console.log(res.data);
            this.setState({ posts: res.data })
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
                        <h1>All Posts</h1>
                        {
                        (this.state.posts.length === 0)
                        ? <div>There are no positions to sign up for yet. Check back later!</div>
                        : <ul>
                            {this.state.posts.map(post => {
                                return <VolListing
                                    refresh = {this.refreshListings}
                                    key={post._id}
                                    {...post} />
                            })}
                        </ul>
                        }
                    </div>
                </div>

            </div>



        )


    }

}


export default MainPage;