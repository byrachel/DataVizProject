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


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {
    return (
      <div>
        
      
      <Header>
        
      </Header>


      <Login>
        
      </Login>

    
      </div>
    );
  }
}

export default App;
