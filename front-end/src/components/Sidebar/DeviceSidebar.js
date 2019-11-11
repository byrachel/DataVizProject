import React, { Component } from 'react';

/* Styles imports */
import './Sidebar.css';
import { Icon, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

/* App component */
class DeviceSidebar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        activeItem: 'Dashboard'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {


    const { activeItem } = this.state;

    return (

      <div>
<Menu text vertical>

<div className='MenuRow'>
    <Icon name='dashboard' className="large" />
    <Menu.Item
        name='Dashboard'
        active={activeItem === 'Dashboard'}
        onClick={this.handleItemClick}
        className="sidebar-menu"
    />
</div>

<div className='MenuRow'>
    <Icon name='upload' className="large" />
    <Menu.Item
        name='Fichiers bruts'
        onClick={this.handleItemClick}
        className="sidebar-menu"
    />
</div>

<div className='MenuRow'>
    <Icon name='picture' className="large" />
    <Menu.Item
        name='Photos'
        onClick={this.handleItemClick}
        className="sidebar-menu"
    />
</div>

<div className='MenuRow'>
    <Icon name='pie chart' className="large" />
    <Menu.Item
        name='Statistiques'
        onClick={this.handleItemClick}
        className="sidebar-menu"
    />
</div>

<div className='MenuRow'>
    <Icon name='bell outline' className="large" />
    <Menu.Item
        name='Alerts'
        onClick={this.handleItemClick}
        className="sidebar-menu"
    />
</div>

</Menu>
    </div>
   
    );
  }
}

export default DeviceSidebar;