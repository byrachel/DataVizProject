import React, { Component } from 'react';



/* Styles imports */
import './login.css';
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';



/* Component imports */


/* App component */
class Login extends Component {
  
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
        <img class="photo" src="../assets/logo.png" alt="logo"/>

          <div className="bg">
        
        
                <Form >
                  <Form.Field>
                    <label>Email </label>
                    <input placeholder='Email' />
                  </Form.Field>
                  <Form.Field>
                    <label>Mot de passe</label>
                    <input placeholder='Mot de passe' />
                  </Form.Field>
                  <Button type='Se connecter'>Se connecter</Button>
                </Form>
 
            </div>
    </div>
      
    );
  }
}

export default Login;