import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Main from "./pages/MainPage";
import Post from "./pages/Post";

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/createpost" component={Post} />
            {/*
            
            <Route exact path="/commissions" component={Commissions} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/admin" component={Admin} /> */}
          </Switch>
        </Router>
      );
    }
  }
  
  export default App;