import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import StoryComponent from "./Story/StoryComponent";
import ChartComponent from "./Charts/ChartComponent";
import HistoryComponent from "./History/HistoryComponent";
import AppComponent from "./App/AppComponent";
import CGSComponent from "./GCS/GCSComponent";

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
                            path={"/charts"}
                            exact={true}
                            render={() => <ChartComponent />}
                        />
                        <Route
                            path={"/history"}
                            exact={true}
                            render={() => <HistoryComponent />}
                        />
                        <Route
                            path={"/app"}
                            exact={true}
                            render={() => <AppComponent />}
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
