import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { Breadcrumb } from 'semantic-ui-react';

/* Styles imports */
import './Accueil.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

/* App component */
class Accueil extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        logout: false,

    }
  }

  _redirection = () => {
      if(this.state.logout) {
        return <Redirect to='https://karroad.com/'/>
      }
  }
  
  _logout = () => {
    var options = {
    method: 'GET',
    headers: {
      "X-Requested-With": "XmlHttpRequest",
      "Content-Type": "application/json"
      },
    credentials: "include"
    }
  
    fetch('http://localhost:8080/users/logout', options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({
          logout: true
        });
      },
      (error) => {
        this.setState({message: "Please, create an account or login."});
    }
    )
  }
  

  render() {
    return (

      <div>
        <div className = "header-container">
          <img src="../assets/logo.png" id="logo" alt="Karroad" />
          <nav>
            <Icon className="mail outline large" /> 
            <Icon className="user outline large" /> 
            <button onClick={this._logout} className="menu-icon"><Icon className="log out large" /></button>
          </nav>

        </div>

      <div className ="image">
          <h1> Flow Analysis with AI</h1>
          <p>  With our cameras, or with your system, <br></br>
              we can analyse your space,
           create your perfect dev and help you to manage <br></br>
           your territory better.</p>
           
           

      </div>

      <div classeName= "footer-content">

          <h2> Analysis of traffic flow </h2>


      </div>
       
      </div>


      

  
   
    );
  }
}

export default Accueil;