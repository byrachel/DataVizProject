import React, { Component } from 'react';

import BarChart from '../Crossfilter/BarChart';
import LineChart from '../LineChart/lineChart';
import Sidebar from '../Sidebar/DeviceSidebar';
import BreadCrumb from '../Dashboard/BreadCrumb';


class DeviceDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {

        return (

          <div>
            <div>
              <BreadCrumb />
            </div>
            
            <div className="ui grid">
            </div>
              <div className="twelve wide column blocs-container">
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

