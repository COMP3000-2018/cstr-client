import React, { Component } from 'react';

import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    render() {
        const { items, currentlySelected, changeCurrentlySelected } = this.props;

        return (<div className="sidebar">
            <div className="sidebar-header">COMP3000</div>
            <div className="sidebar-items">
                {items.map(item => <SidebarItem onClick={() => changeCurrentlySelected(item.name)} selected={currentlySelected === item.name} name={item.name} icon={item.icon} category={item.category} />)}
            </div>
        </div>);
    }
}

export default Sidebar;