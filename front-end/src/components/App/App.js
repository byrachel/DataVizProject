/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

/* Styles imports */
import './App.css';
import 'semantic-ui-css/semantic.min.css';



/* Component imports */


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
        <h1 class="title">MERN Boilerplate</h1>

        <div className="container">
          <p class="text">{this.state.message}</p>
        </div> 

        <div className="ui labeled input">
  <div className="ui label label">http://</div>
  <input type="text" placeholder="mysite.com" />
</div>
<div>.</div>
<div>
        <button className="ui button">Click Here</button>
        </div>

      </div>
    );
  }
}

export default App;
