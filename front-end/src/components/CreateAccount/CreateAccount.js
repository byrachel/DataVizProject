/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import 'semantic-ui-css/semantic.min.css';


/* App component */
class CreateAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        user: {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        message:''
    }
  }}

  _createAccount = (event) => {
    event.preventDefault();

    var data = {
        user: {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }
    }

    var options = {
        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
    }

    fetch('http://localhost:8080/users', options)
    .then((res) => (res.json()))
    .then(
        (result) => {
            this.setState({message: result.message});
        },
        (error) => {
            this.setState({message: "Oups. Please try again."});
        }
    )
  }

  render() {
    return (
      <div>
        <h3 >{this.state.message}</h3>
            <form>
                <div>
                    <input onChange={(event) => {this.setState({firstname:event.target.value})}} type="text" className="validate" required/>
                    <p>firstname</p>
                </div>
                <div>
                    <input onChange={(event) => {this.setState({lastname:event.target.value})}} type="text" className="validate" required/>
                   <p>lastname</p>
                </div>
            
                <div>
                    <input onChange={(event) => {this.setState({email:event.target.value})}} type="email" className="validate" required />
                    <p>EMail</p>
                </div>
                <div>
                    <input onChange={(event) => {this.setState({password:event.target.value})}} id="password-login" type="password" className="validate" required />
                    <p>Password</p>
                </div>
                <button onClick={this._createAccount} type="submit">Submit
                </button>
                
            </form>

      </div>
    );
  }
}

export default CreateAccount;
