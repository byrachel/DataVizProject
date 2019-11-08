import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


import './map.css';



class map extends Component {
  render() {
    return (
      <div className='map'>
        <Map
        style={{ height: "480px", width: "100%" }}
        zoom={10}
        center={[43.7031, 7.2661]}>
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
  

        </Map>
      </div>
    );
  }
}

export default map ;