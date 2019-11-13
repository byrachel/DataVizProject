import React, { Component } from 'react';

import { Segment, Icon, Dropdown } from 'semantic-ui-react';
import './Blocs.css';
import Maping from '../Map/map';


class Blocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videocam: [],
            endengagement: '',
            selectedVideocam: ''
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
            console.log(result);
            this.setState({
    
            endengagement: result.endengagement,
            nbVideocam: result.videocam.length,
            videocam: result.videocam
    
            });
          },
          (error) => {
            this.setState({message: "Vous n'avez pas de périphérique actif."});
          }
        )
      }

      _displayVideocam = () => {

        var videocam = this.state.videocam;
        
        var peripheriques = videocam.map((device) => {
          return(
            
            <option value={device.name}>{device.name}</option>
            
          )
        });
        return (
            <div><select className="select-css">{peripheriques}</select></div>
          );
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
                                        <p className="nbActif"> {this.state.nbVideocam}</p>
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
                                        <p className="dateContrat"> {this.state.endengagement} </p>
                                        <p className="blocText"> date de fin de contrat.</p>
                                    </div>
                                </div>
                            </div>
                        </Segment>
                    </div>
                    <div className="sixteen wide column">
                        <h2>Séléctionnez un périphérique:</h2>
                        <p>{this._displayVideocam()}</p>
                       
                    
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

