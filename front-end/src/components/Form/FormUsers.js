import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
} from 'semantic-ui-react';



const options = [
  { key: '1', text: 'Cannes', value: 'Cannes' },
  { key: '2', text: 'Nice', value: 'Nice' },
  { key: '3', text: 'Other', value: 'other' },
]
const opt = [
    { key: 'A', text: 'Admin', value: 'Admin' },
    { key: 'B', text: 'User', value: 'User' },
  ]


  

class FormUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (


        



<Grid centered columns={2}>
        <Grid.Column>



<Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
         </Form.Group>


         <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Company'
            placeholder='Company'
          />
             <Form.Field
            control={Select}
            label='Ville'
            options={options}
            placeholder='Ville'
          />
        </Form.Group>

        <Form.Group widths='equal'>

        <Form.Field
            control={Input}
            label='Date fin de Contrat'
            placeholder='Date fin de Contrat'
          />
             <Form.Field
            control={Select}
            label='Status'
            options={opt}
            placeholder='Status'
          />
          </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Email'
            placeholder='Email'
          />




          <Form.Field
            control={Input}
            label='Password'
            placeholder='Password'
          />
          
        </Form.Group>

    
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>

        </Grid.Column>
        </Grid>



    )
  }
}

export default FormUsers;