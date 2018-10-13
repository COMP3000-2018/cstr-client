import React, { Component } from 'react';

class SidebarItem extends Component {
    render() {
        const { category, icon, name, selected, onClick } = this.props;

        return (
            <div onClick={onClick} className={`sidebar-item ${selected ? "sidebar-item-selected" : ""} section-${category}`}>
                <div className={selected ? "sidebar-item-selector" : ""}></div>
                <div className="sidebar-item-content">
                    {icon && <i className={`sidebar-icon fas fa-fw ${icon} icon-fixed-width`}></i>}
                    {name}
                </div>
            </div>);
    }
}

export default SidebarItem;