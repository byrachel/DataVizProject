import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


/* Styles imports */
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

/* Styles imports */
import './header.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

/* App component */
class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        logout: false
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
    <div className = "container">

        <img className ="logo"src="../assets/logo.png" alt="logo"/>

        <div className="bouton ">
         
            <Icon className="mail outline" size='large'/> 
            <Icon className="user outline" size='large'/> 
            <button onClick={this._logout}><Icon className="log out" size='large'/></button>

        </div>
    </div>
   
    );
  }
}

export default Header;