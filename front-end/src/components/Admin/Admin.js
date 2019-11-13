import React, { Component } from 'react';
import Sidebar from '../Sidebar/DeviceSidebar';
import BreadCrumb from '../Dashboard/BreadCrumb';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {

        return (

          <div>
            <BreadCrumb />

            <div className="ui grid">
              <div className="three wide column sidebar-container">

                <div className="sidebar">
                  <Sidebar />
                </div>
              </div>
            </div>


          </div>


        );
    }
}

export default Admin;

