import React, { Component } from "react";
import Progress from '../../Progress.js';

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
          fetch(`/mock/buttons/${buttonId}`).then(resp =>
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
        
    const { title, text, buttons, trophy } = this.props;

    if (this.props.trophy) { // this should not be in render, need to refactor the way slides are mounted 
      Progress.trophies[this.props.trophy] = true;
    }

    if (title == "Assessment Results - Vitals") {
        Progress.Discovered = {
            BloodPressure: true,
            HeartRate: true,
            OxygenSaturation: true,
            Temperature: true,
            Weight: true
        }
    } else if (title === 'Case Presentation') {
      Progress.trophies = {};
      Progress.completed = false;
    }

    return (
      <div className="slide">
        <div className="slide-title">{title}</div>
        <div className="slide-trophy-count">{`${Object.keys(Progress.trophies).length}/7 actions completed`}</div>
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
