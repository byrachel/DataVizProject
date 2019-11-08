import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { Breadcrumb } from 'semantic-ui-react';

/* Styles imports */
import './header.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

/* App component */
class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        logout: false,
        //company: 'Mairie de Cannes',
        //selector: 'Dashboard',
        firstname: 'Prénom',
        lastname: 'NOM',
        sections: [
          { key: "1", content: 'Mairie de Cannes', link: true },
          { key: '2', content: 'Dashboard', link: true }
        ]
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
/* header + logo */
      <div>
        <div className = "header-container">
          <img src="../assets/logo.png" id="logo" alt="Karroad" />
          <nav>
            <Icon className="mail outline large" /> 
            <Icon className="user outline large" /> 
            <button onClick={this._logout} className="menu-icon"><Icon className="log out large" /></button>
          </nav>
        </div>


       {/* BreadCrumb */}
       <div className = "container">
          <div className="BreadRow">
            <div className="inline">
            <div className="rectangle"></div>
            <div className="BreadPolice left"></div>
       <Breadcrumb icon='right angle' sections={this.state.sections} />
       </div>
            <div className="inline">
            <p className="hello">Bonjour {this.state.firstname} {this.state.lastname} </p>
            
            <div className="rectangle"></div>
            </div>
          </div>
          </div>


        </div>

  
   
    );
  }
}

export default Header;


/*

        <div className = "container">
          <div className="BreadRow">
            <div className="inline">
            <div className="rectangle"></div>
            <div className="BreadPolice left">
              <p className="company">{this.state.company}
              <Icon name='right angle' />
              {this.state.selector}</p>
            </div>
            </div>
            <div className="inline">
            <p className="hello">Bonjour {this.state.firstname} {this.state.lastname} </p>
            
            <div className="rectangle"></div>
            </div>
          </div>
        </div>
*/
        