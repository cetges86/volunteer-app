import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout"
import Signup from "./pages/SignUp";
import Main from "./pages/MainPage";
import Post from "./pages/Post";
import TeacherMain from './pages/TeacherMain';
import editPost from "./pages/editPost";

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/createpost" component={Post} />
            <Route exact path="/teachermain" component={TeacherMain} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/edit/:id" component={editPost}/>
          </Switch>
        </Router>
      );
    }
  }
  
  export default App;