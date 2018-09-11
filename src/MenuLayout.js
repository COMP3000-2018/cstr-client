import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import StoryComponent from "./features/story/StoryComponent";
import ChartComponent from "./features/charts/ChartComponent";
import HistoryComponent from "./features/history/HistoryComponent";

import { Switch, Route, withRouter } from 'react-router-dom';

class MenuLayout extends Component {
  state = { activeItem: "" };

  handleItemClick(e, name) {

    this.setState({
      activeItem: name
    }, () => {
      this.props.history.push(`/${this.state.activeItem}`)
    })

  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular className={"menu"}>
            <Menu.Item
              name="story"
              active={activeItem === "story"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
            <Menu.Item
              name="charts"
              active={activeItem === "charts"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
            <Menu.Item
              name="history"
              active={activeItem === "history"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
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
            </Switch>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(MenuLayout);
