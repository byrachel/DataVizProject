import React, { Component } from 'react';

import { Grid, Segment, Icon, Menu, Dropdown, Select } from 'semantic-ui-react';
import './Blocs.css';
import Maping from '../Map/Map';

/* c'est quoi, qui a mis ca lol ???? 

const renderLabel = (label) => ({
    color: 'blue',
    content: `Customized label - ${label.text}`,
    icon: 'check',
})


*/ 


class Blocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbActif: '5',
            dateContrat: '31/11/2024',
            choiceCamera: [
                {
                  key: 'Camera 1',
                  text: 'Camera 1',
                  value: 'Camera 1',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                  key: 'Elliot Fu',
                  text: 'Elliot Fu',
                  value: 'Elliot Fu',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                  key: 'Stevie Feliciano',
                  text: 'Stevie Feliciano',
                  value: 'Stevie Feliciano',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                  key: 'Christian',
                  text: 'Christian',
                  value: 'Christian',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                  key: 'Matt',
                  text: 'Matt',
                  value: 'Matt',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                  key: 'Justen Kitsune',
                  text: 'Justen Kitsune',
                  value: 'Justen Kitsune',
                  image: { avatar: true, src: '../assets/logo.png' },
                },
                {
                    key: 'Matt',
                    text: 'Matt',
                    value: 'Matt',
                    image: { avatar: true, src: '../assets/logo.png' },
                  },
                  {
                    key: 'Justen Kitsune',
                    text: 'Justen Kitsune',
                    value: 'Justen Kitsune',
                    image: { avatar: true, src: '../assets/logo.png' },
                  },
              ]
        }
    }


    componentDidMount() {

        var options = {
            method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        }
    
        fetch("http://localhost:8080/select", options)
          .then(res => (res.json()))
          .then(
            (result) => {
              this.setState({ message: result.message });
            },
            (error) => {
              console.log(error);
            }
          )
      }
    



    render() {

        return (

            <div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <Segment className="blue">
                            <div className="perifColor">
                                <Icon name='sync alternate' size='huge' />
                                <p className="blocCenter nbActif"> {this.state.nbActif} </p>
                            </div>
                            <p className="blocCenter"> Périphériques actifs </p>
                        </Segment>
                    </div>
                    <div className="eight wide column">
                        <Segment className="orange">
                            <div className="dateColor">
                                <Icon name='attention' size='huge' />
                                <p className="blocCenter dateContrat"> {this.state.dateContrat} </p>
                            </div>
                            <p className="blocCenter"> date de fin de contrat.</p>
                        </Segment>
                    </div>
                    <div className="sixteen wide column">

                        <Dropdown
                            placeholder='Select Camera'
                            fluid
                            selection
                            options={this.state.choiceCamera}
                        />

                    </div>
                    <div className="sixteen wide column">

                        <Segment>
                            <Maping />
                        </Segment>
                    </div>

                </div>
            </div>


        );
    }
}

export default Blocs;

