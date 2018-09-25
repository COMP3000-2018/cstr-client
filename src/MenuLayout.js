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
        <Grid.Column width={2}>
          <Menu fluid vertical tabular className={"menu"}>
            <h1>COMP3000</h1>
            <i class="material-icons">account_circle</i>
            <Menu.Item
              name="Story"
              active={activeItem === "Story"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
            <i class="material-icons">bar_chart</i>
            <Menu.Item
              name="Charts"
              active={activeItem === "Charts"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
            <i class="material-icons">book</i>
            <Menu.Item
              name="History"
              active={activeItem === "History"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
            <i class="material-icons">apps</i>
            <Menu.Item
              name="App"
              active={activeItem == "App"}
              onClick={(e, { name } ) => this.handleItemClick(e, name)}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
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
