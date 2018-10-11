import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content';

import { withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelected: "Case Story"
        };
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
                case "ANZBA Guidelines":
                    window.open("https://anzba.org.au/care/referral-criteria/");
                    break;
                case "TBSA Calculator":
                    window.open("https://www.researchgate.net/figure/The-Lund-and-Browder-Chart-for-calculation-of-TBSA-Permission-to-reproduce-from_fig2_306034027");
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
                "name": "Physical Examination",
                "icon": "fa-chart-bar"
            },
            {
                "name": "Investigations",
                "icon": "fa-chart-bar"
            },
            {
                "name": "History",
                "icon": "fa-history"
            },
            {
                "name": "Glasgow Coma Scale",
                "icon": "fa-star"
            },
            {
                "name": "TBSA Calculator",
                "icon": "fa-star"
            },
            {
                "name": "ANZBA Guidelines",
                "icon": "fa-star"
            },
            {
                "name": "Case Story",
                "icon": "fa-book"
            },
            {
                "name": "Discussion Starters",
                "icon": "fa-book"
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