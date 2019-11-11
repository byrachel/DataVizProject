/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import 'semantic-ui-css/semantic.min.css';
import { Breadcrumb } from 'semantic-ui-react';

/* Component imports */
import Blocs from '../Blocs/Blocs';
import Sidebar from '../Sidebar/Sidebar';


/* App component */
class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        //company: 'Mairie de Cannes',
        //selector: 'Dashboard',
        firstname: 'Prénom',
        lastname: 'NOM',
        sections: [
          { key: "1", content: 'Mairie de Cannes', link: true },
          { key: '2', content: 'Dashboard', link: true }
        ]
    }
  }

  render() {
    return (




          <div>

            {/* BreadCrumb */}
   
            <div className="BreadRow">
                <div className="inline">
                    <div className="rectangle"></div>
                    <div className="BreadPolice left"></div>
                    <Breadcrumb icon='right angle' sections={this.state.sections} />
                    </div>
                    <div className="inline">
                    <p className="hello">Bonjour {this.state.firstname} {this.state.lastname} </p>
                    <div className="rectangle"></div>
                </div>
            </div>

            {/* Blocs */}
            <div className="ui grid">
              <div className="three wide column sidebar-container">
                <div className="sidebar">
                  <Sidebar />
                </div>
              </div>
              <div className="twelve wide column blocs-container">
                <Blocs />

              </div>
            </div>
          </div>








    );
  }
}

export default Dashboard;


/*

        <div className = "container">
          <div className="BreadRow">
            <div className="inline">
            <div className="rectangle"></div>
            <div className="BreadPolice left">
              <p className="company">{this.state.company}
              <Icon name='right angle' />
              {this.state.selector}</p>
            </div>
            </div>
            <div className="inline">
            <p className="hello">Bonjour {this.state.firstname} {this.state.lastname} </p>
            
            <div className="rectangle"></div>
            </div>
          </div>
        </div>
*/