import React, { Component } from 'react';

import BarChart from '../Crossfilter/BarChart';
import Sidebar from '../Sidebar/DeviceSidebar';


class DeviceDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }



    render() {

        return (

            <div>
                

                <div className="ui grid">
              <div className="three wide column sidebar-container">
                <div className="sidebar">
                  <Sidebar />
                </div>
              </div>
              <div className="twelve wide column blocs-container">
              <BarChart />

              </div>
            </div>


            </div>


        );
    }
}

export default DeviceDashboard;

