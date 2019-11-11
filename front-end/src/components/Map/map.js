import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";


import './map.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./geopin.png'),
  iconUrl: require('./geopin.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});




class Maping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionXY: [43.7031, 7.2661],
      markers: [[43.6205645, 7.0749353], [43.7031, 7.2661], [43.3234546, 4.5654],
               [43.6205685, 7.07497453], [43.6205645, 7.0749353], [44.6205614, 7.0949353], [43.7000839, 7.2867589], 
               [43.7032620, 7.2724500], [43.6983079, 7.2850910], [43.7055243, 7.2648916], [43.7016695, 7.2837466] ]

    }
  }


  /* 
      addMarker = (e) => {
      const {markers} = this.state
      markers.push(e.latlng)
      this.setState({markers})
   }
 */

  render() {
    return (
      <div className='map'>
        <Map
          style={{ height: "400px", width: "100%" }}
          zoom={12}
          center={this.state.positionXY}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position}>
              <Popup position={position}>
                <span> {position} <br /> autres infos ??? </span>
              </Popup>
            </Marker>
          )}
          
        </Map>





      </div>
    );
  }
}

export default Maping;


