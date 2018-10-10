import React, { Component } from "react";

class ExaminationComplete extends Component {
  render() {
    return (
      <div className="examination-complete">
        <div className="examination-complete-icon"><i class="fas fa-check fa-5x"></i></div>
        <div className="examination-complete-main">Examination Complete!</div>
        <div className="examination-complete-navigator">
          Head to Charts to view results
        </div>
        <div className="examination-buttons">
          <div className="examination-close button">Close</div>
          <div className="examination-navigate button">Go to Charts</div>
        </div>
      </div>
    );
  }
}

export default ExaminationComplete;
