import React, { Component } from "react";
import { Container, Segment, Button } from "semantic-ui-react";

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { buttons } = this.props;

    this.updateButtons(buttons);
  }

  componentWillReceiveProps(props) {
    this.updateButtons(props.buttons);
  }

  updateButtons(buttons) {
    this.setState({ loading: true }, () => {
      Promise.all(
        buttons.map(buttonId =>
          fetch(`http://localhost:1989/buttons/${buttonId}`).then(resp =>
            resp.json()
          )
        )
      ).then(retrievedButtons => {
        this.setState({ buttons: retrievedButtons, loading: false });
      });
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }

    const { title, text, buttons } = this.props;

    return (
      <Segment>
        <h3>{title}</h3>
        <p>{text}</p>
        {this.state.buttons.map(button => {
          return (
            <Button onClick={() => this.props.changeSlide(button.next_slide)}>
              {button.label}
            </Button>
          );
        })}
      </Segment>
    );
  }
}

export default Slide;
