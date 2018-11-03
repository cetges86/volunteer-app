import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/*<Route exact path="/media" component={Media} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/commissions" component={Commissions} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/admin" component={Admin} /> */}
          </Switch>
        </Router>
      );
    }
  }
  
  export default App;