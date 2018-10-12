import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content';

import { withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelected: "Story"
        };
    }

    changeCurrentlySelected(currentlySelected) {
        this.setState({ currentlySelected }, () => {
            this.props.history.push(`/${this.state.currentlySelected}`)
        });
    }

    render() {
        const sidebarItems = [
            {
                "name": "Physicals",
                "icon": "fa-chart-bar"
            },
            {
                "name": "Investigations",
                "icon": "fa-search"
            },
            {
                "name": "History",
                "icon": "fa-history"
            },
            {
                "name": "GCS",
                "icon": "fa-star"
            },
            {
                "name": "ANZBA",
                "icon": "fa-star"
            },
            {
                "name": "Lund-Browder",
                "icon": "fa-star"
            },
            {
                "name": "Story",
                "icon": "fa-book"
            },
            {
                "name": "Diccussion",
                "icon": "fa-tasks"
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