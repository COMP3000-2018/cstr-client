import React, { Component } from "react";

import { Button } from 'semantic-ui-react';

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
    if (!buttons || buttons.length === 0) {
      return;
    }
    
    this.setState({ loading: true }, () => {
      Promise.all(
        buttons.map(buttonId =>
          fetch(`http://localhost:1989/buttons/${buttonId}`).then(resp =>
            resp.json()
          )
        )
      ).then(retrievedButtons => {
        this.setState({ buttons: retrievedButtons, loading: false });
        this.setBackButtons()  
        
      });
    });
    
  }
    
    setBackButtons() {
      var x = document.getElementsByClassName("button");
      for (let i = 0; i < x.length; i++) {
        if (x[i].innerHTML.includes("Back")) {
          x[i].classList.add("backButton");
        }
      }
    }
    

  // really we should break button out into its own component. TODO
  setButtonOnClick(button) {
    if (button.error) {
      return (() => alert(button.error));
    } else {
      return (() => this.props.changeSlide(button.next_slide));
    }
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }

    const { title, text, buttons } = this.props;

    return (
      <div className="slide">
        <div className="slide-title">{title}</div>
        <div className="slide-text">{text}</div>
        <div className="slide-buttons">
          {this.state.buttons.map(button => {
            return (
              // <div className="button" onClick={() => this.props.changeSlide(button.next_slide)}>
              <div className="button" onClick={this.setButtonOnClick(button)}>
                {button.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slide;
