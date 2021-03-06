import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import StoryComponent from "./Story/StoryComponent";
import ChartComponent from "./Charts/ChartComponent";
import HistoryComponent from "./History/HistoryComponent";
import CGSComponent from "./GCS/GCSComponent";
import LBChartComponent from "./Lund-Browder/LBChartComponent";
import InvestigationsComponent from "./Investigations/InvestigationsComponent";
import ANZBACompohent from "./ANZBA/ANZBACompohent";
import DiscussionCompohent from "./Discussion/DiscussionCompohent";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content-window">
                    <Switch>
                        <Route
                            path={"/story"}
                            exact={true}
                            render={() => <StoryComponent />}
                        />
                        <Route
                            path={"/Investigations"}
                            exact={true}
                            render={() => <InvestigationsComponent />}
                        />
                        <Route
                            path={"/Discussion"}
                            exact={true}
                            render={() => <DiscussionCompohent />}
                        />
                        <Route
                            path={"/Physical"}
                            exact={true}
                            render={() => <ChartComponent />}
                        />
                        <Route
                            path={"/history"}
                            exact={true}
                            render={() => <HistoryComponent jwt={this.props.jwt}/>}
                        />
                        <Route
                            path={"/Lund-Browder"}
                            exact={true}
                            render={() => <LBChartComponent />}
                        />
                        <Route
                            path={"/ANZBA"}
                            exact={true}
                            render={() => <ANZBACompohent />}
                        />
                        <Route
                            path={"/gcs"}
                            exact={true}
                            render={() => <CGSComponent />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;
