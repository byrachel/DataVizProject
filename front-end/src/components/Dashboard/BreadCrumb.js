/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';


/* App component */
class Breadcrumb extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        enterprise: '',
        contactFirstname: '',
        contactLastname: '',
        status: ''
      }
    }
  

  componentDidMount() {
    
    var options = {
      method: 'GET',
      headers: {
        "X-Requested-With": "XmlHttpRequest",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }
    
    fetch('http://localhost:8080/users/user', options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({

            enterprise: result.enterprise,
            contactFirstname: result.firstname,
            contactLastname: result.lastname,
            status: result.status,

        });
      },
      (error) => {
        this.setState({message: "Please, create an account or login."});
      }
    )
  }     

  render() {
    return (

          <div className="BreadRow">
            <div className="inline">
                <div className="rectangle"></div>
                <div className="BreadPolice left">
                    <p className="company">{this.state.enterprise}
                    <Icon name='right angle' />
                    </p>
                </div>
            </div>
            <div className="inline">
                <p className="hello">Bonjour {this.state.contactFirstname} {this.state.contactLastname} </p>
                <div className="rectangle"></div>
            </div>
          </div>

    );
  }
}

export default Breadcrumb;

