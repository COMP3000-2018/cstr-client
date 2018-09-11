import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class MenuLayout extends Component {
  state = { activeItem: 'story' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular className={"menu"}>
            <Menu.Item name='story' active={activeItem === 'story'} onClick={this.handleItemClick} />
            <Menu.Item name='charts' active={activeItem === 'charts'} onClick={this.handleItemClick} />
            <Menu.Item name='patient history' active={activeItem === 'patient history'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
              Hello World
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default MenuLayout;
