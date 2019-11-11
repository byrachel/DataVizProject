/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';
import 'semantic-ui-css/semantic.min.css';

/* Component imports */
import Login from '../Login/login';
import Header from '../Header/header';
import Dashboard from '../Dashboard/Dashboard';
import DeviceDashboard from '../Dashboard/DeviceDashboard';
import CreateAccount from '../CreateAccount/CreateAccount';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (

      <Router>
        <div>
          <Header />

            <Dashboard />



          <Switch>
            <Route path="/Dashboard/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/CreateAccount/CreateAccount">
              <CreateAccount />
            </Route>
            <Route path="/Login/Login">
              <Login />
            </Route>
            <Route path="/Dashboard/DeviceDashboard">
              <DeviceDashboard />
            </Route>
          </Switch>

          <div>
            <p>_</p>
            <Link to="/Login/Login">Login</Link> _ 
            <Link to="/Dashboard/DeviceDashboard">DeviceDashboard</Link> _ 
            <Link to="/CreateAccount/CreateAccount">CreateAccount</Link>
          </div>
        </div>
      </Router>


    );
  }
}

export default App;
