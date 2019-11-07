/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';
import 'semantic-ui-css/semantic.min.css';

/* Component imports */
import CreateAccount from '../CreateAccount/CreateAccount';
import Login from '../Login/login';
import Header from '../Header/header';
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

          <Switch>
            <Route path="/">

            </Route>
          </Switch>

        </div>
      </Router>


    );
  }
}

export default App;
