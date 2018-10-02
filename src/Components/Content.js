import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import StoryComponent from "./Story/StoryComponent";
import ChartComponent from "./Charts/ChartComponent";
import HistoryComponent from "./History/HistoryComponent";
import AppComponent from "./App/AppComponent";

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
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Content;
