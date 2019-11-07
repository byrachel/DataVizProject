import React, { Component } from 'react';



/* Styles imports */
import './login.css';
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

/* App component */
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

        user : {
            email:'',
            password:'',
            message:'',
        }
    }
  }
  
  _inputEmail = (event) => {
    this.setState({email: event.target.value});
  }

  _inputPassword = (event) => {
    this.setState({password: event.target.value});
  }

_inputLogin = (e) => {

  e.preventDefault();

    if(!this.state.email || !this.state.password) {
        return;
    }

    var data = {
      email: this.state.email,
      password: this.state.password
    }

    var options = {
      method: "POST",
      headers: {
        "X-Requested-With": "XmlHttpRequest",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }

    

    fetch("http://localhost:8080/users/login", options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        this.setState({message: "Please try again or create a new account."});
      }
    )
  }

  render() {
    return (

        <div className="bg">
           
              <img class="photo" src="../assets/logo.png" alt="logo"/>

                <Form>
                <h3>{this.state.message}</h3>
                    <Form.Field>
                    <label>Email </label>
                    <input placeholder='Email' onChange={this._inputEmail} className="login-input" />
                    </Form.Field>
                    <Form.Field>
                    <label>Mot de passe</label>
                    <input placeholder='Mot de passe' onChange={this._inputPassword} type="password" className="login-input" />
                    </Form.Field>
                  <Button type='Submit' onClick={this._inputLogin} className="submit-button" >Se connecter</Button>

                </Form>
 
        </div>

      
    );
  }
}

export default Login;