import React, { Component } from "react";
import Progress from '../../Progress.js';

import config from '../../Config';

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
          fetch(`${config.CASE_API_ENDPOINT}/buttons/${buttonId}`).then(resp =>
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
  completedTask(task) {
    // text displayed in Actions completed checklist
    var taskMap = {
      airway: "Airway",
      burns: "Burns",
      consciousness: "Consciousness",
      vitals: "Vitals",
      pain: "Pain",
      fluids: "Fluids",
      tube: "Intubate"
    }
    if (Progress.trophies[task]) {
      return(
        <td className="completed-task">{taskMap[task]}</td>
      );
    } else {
      return(
        <td className="incomplete-task">???</td>
      );
    }
  }

  createCheckbox() {
    return(
      <fieldset className="status-fieldset">
      <legend className="status-title">{`${Object.keys(Progress.trophies).length}/7 Actions Completed`}</legend>
      <table className="status-table">
        <tr>
          {this.completedTask("airway")}
        </tr>
        <tr>
          {this.completedTask("burns")}
        </tr>
        <tr>
          {this.completedTask("consciousness")}
        </tr>
        <tr>
          {this.completedTask("vitals")}
        </tr>
        <tr>
          {this.completedTask("pain")}
        </tr>
        <tr>
          {this.completedTask("fluids")}
        </tr>
        <tr>
          {this.completedTask("tube")}
        </tr>
      </table>
      </fieldset>
    )
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
        {this.createCheckbox()}
        <br />
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
