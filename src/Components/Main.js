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
                "name": "Story",
                "icon": "fa-book"
            },
            {
                "name": "Charts",
                "icon": "fa-chart-bar"
            },
            {
                "name": "History",
                "icon": "fa-history"
            },
            {
                "name": "App",
                "icon": "fa-star"
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