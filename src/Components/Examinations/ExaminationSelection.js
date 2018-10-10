import React, { Component } from "react";

class ExaminationPopup extends Component {
  render() {
    return (
      <div className='examination-selection'>
        <div className='examination-selection-header'>What physical examination would you like to undertake?</div>
        <div className="slide-buttons">
          {this.props.actions.map(action => (
            <div className="button">{action}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExaminationPopup;
