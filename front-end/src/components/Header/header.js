import React, { Component } from 'react';



/* Styles imports */
import './header.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'




/* Component imports */

/* App component */
class Header extends Component {
  
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
    <div className = "container">
        <img className ="logo"src="../assets/logo.png" alt="logo"/>

        <div className="bouton ">
         
            <Icon className="mail outline" size='large'/> 
              <Icon className="user outline" size='large'/> 
                <Icon className="log out" size='large'/> 
        </div>
    </div>
    
      
    );
  }
}

export default Header;