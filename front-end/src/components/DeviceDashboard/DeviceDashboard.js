import React, { Component } from 'react';

import BarChart from '../Crossfilter/BarChart';
import LineChart from '../LineChart/lineChart';
import Sidebar from '../Sidebar/DeviceSidebar';
import BreadCrumb from '../Dashboard/BreadCrumb';


class DeviceDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idVideocam: '',
          videocam: ''
        }
    }

  componentDidMount() {

    // Je récupère le props de la page "Blocs"
    var idVideocam = this.props.location.state.idVideocam;

    // Sécurité : Si aucun ID n'est récupéré, je return.
    if(!idVideocam) {
      return;
    }

    var data = {
      id: idVideocam
    };

    var options = {
        method: 'POST',
        headers: {
          "X-Requested-With": "XmlHttpRequest",
          "Content-Type": "application/json"
        },
        credentials: "include",
    // Les données que j'envoies : data : id Videocam
        body: JSON.stringify(data)
      }
      
    fetch('http://localhost:8080/device', options)
    .then((res) => (res.json()))
    .then(
    (result) => {
        this.setState({
        idVideocam: result.idVideocam,
        videocam: result.videocam
        });
    },
    (error) => {
        this.setState({message: "Attention : Vous n'avez pas sélectionné de périphérique."});
    }
    )
  }

    render() {

        return (

          <div>
            <div>
              <BreadCrumb />
            </div>
            <div>
            </div>
            <div className="ui grid">
            </div>
              <div className="twelve wide column blocs-container">
                <h2>{this.state.videocam}</h2>
                <BarChart />
              </div>
              <div className="twelve wide column blocs-container">
                <br />
                <LineChart />
              </div>
            </div>


        );
    }
}

export default DeviceDashboard;

