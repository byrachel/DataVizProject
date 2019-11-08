/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';
import 'semantic-ui-css/semantic.min.css';

/* Component imports */
import BarChart from '../Crossfilter/BarChart';
import Login from '../Login/login';
import Header from '../Header/header';

import Blocs from '../Blocs/Blocs';
import Sidebar from '../Sidebar/Sidebar';
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
          <div className="container">

          <div className="ui grid">
            <div className="three wide column sidebar-container">
            <div className="sidebar">
              <Sidebar />
            </div>
            </div>
            <div className="twelve wide column blocs-container">

              <Blocs />

            </div>
            </div>


          </div>
            <div>
              <BarChart />
            </div>


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
