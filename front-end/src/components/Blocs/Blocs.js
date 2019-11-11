import React, { Component } from 'react';

import { Grid, Segment, Icon, Menu, Dropdown, Select } from 'semantic-ui-react';
import './Blocs.css';
import Maping from '../Map/map';



const renderLabel = (label) => ({
    color: 'blue',
    content: `Customized label - ${label.text}`,
    icon: 'check',
})

class Blocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbActif: '15',
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



    render() {

        return (

            <div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <Segment raised className="blue">
                            <div className="inline perifColor">
                                <div className="ui grid">
                                    <div className="four wide column">
                                        <Icon name='video' size='huge' />
                                    </div>
                                    <div className="twelve wide column">
                                        <p className="nbActif"> {this.state.nbActif}</p>
                                        <p className="blocText">Périphériques actifs</p>
                                    </div>
                                </div>
                            </div>
                        </Segment>
                    </div>
                    <div className="eight wide column">
                        <Segment raised className="orange">
                            <div className="dateColor inline">
                                <div className="ui grid">
                                    <div className="four wide column">
                                        <Icon name='attention' size='huge' />
                                    </div>
                                    <div className="twelve wide column">
                                        <p className="dateContrat"> {this.state.dateContrat} </p>
                                        <p className="blocText"> date de fin de contrat.</p>
                                    </div>
                                </div>
                            </div>
                        </Segment>
                    </div>
                    <div className="sixteen wide column">
                        <h2>Séléctionnez un périphérique:</h2>
                        
                        
                        <Dropdown

                            placeholder='Vos périphériques :'
                            fluid
                            selection
                            options={this.state.choiceCamera}
                        />

                    
                    </div>
                    <div className="sixteen wide column">

                        <Segment raised>
                            <Maping />
                        </Segment>
                    </div>

                </div>
            </div>


        );
    }
}

export default Blocs;

