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
              <div className="three wide column sidebar-container">
                <div className="sidebar">
                  <Sidebar />
                </div>
              </div>
              <div className="twelve wide column blocs-container">
                <BarChart />
              </div>
              <div className="twelve wide column blocs-container">
                <LineChart />
              </div>
            </div>

          </div>


        );
    }
}

export default DeviceDashboard;

