import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content';
import Progress from '../Progress.js';
import { withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelected: "Story"
        };
        
        // Redirect to story if on main page
        if (window.location.pathname == "/") {
            window.location.href = 'Story';
        }
        
        // clear saved data
        Progress.Discovered = {
            BloodPressure: false,
            HeartRate: false,
            OxygenSaturation: false,
            Temperature: false,
            Weight: false
        }
    }

    changeCurrentlySelected(currentlySelected) {
        this.setState({ currentlySelected }, () => {
            
            switch (this.state.currentlySelected) {
                case "Glasgow Coma Scale":
                    this.props.history.push("gcs");
                    break;
                case "Physical Examination":
                    this.props.history.push("charts");
                    break;
                case "Case Story":
                    this.props.history.push("story");
                    break;
                case "Discussion Starters":
                    this.props.history.push("discussion");
                    break;
                default:
                    this.props.history.push(`/${this.state.currentlySelected}`);     
            }
        });
    }

    render() {
        const sidebarItems = [
            {
                "name": "Physicals",
                "icon": "fa-chart-bar",
                "category": "charts"
            },
            {
                "name": "Investigations",
                "icon": "fa-search",
                "category": "charts"
            },
            {
                "name": "History",
                "icon": "fa-history",
                "category": "charts"
            },
            {
                "name": "GCS",
                "icon": "fa-star",
                "category": "app"
            },
            {
                "name": "ANZBA",
                "icon": "fa-star",
                "category": "app"
            },
            {
                "name": "Lund-Browder",
                "icon": "fa-star",
                "category": "app"
            },
            {
                "name": "Story",
                "icon": "fa-book",
                "category": "story"
            },
            {
                "name": "Diccussion",
                "icon": "fa-tasks",
                "category": "story"
            },
        ];

        return (
            <React.Fragment>
                <Sidebar
                    changeCurrentlySelected={(newSelection) => this.changeCurrentlySelected(newSelection)}
                    currentlySelected={this.state.currentlySelected}
                    items={sidebarItems}
                />
                <Content />
            </React.Fragment>
        )
    }
}

export default withRouter(Main);