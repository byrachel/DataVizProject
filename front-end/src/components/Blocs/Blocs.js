import React, { Component } from 'react';

import { Grid, Segment, Icon, Menu } from 'semantic-ui-react';
import './Blocs.css';

class Blocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbActif: '5',
            dateContrat: '31/11/2024',
        }
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
                </div>  
            </div>

                        
        );
    }
}

export default Blocs;