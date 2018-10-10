import React, { Component, Fragment } from "react";

class PopupContainer extends Component {
  state = { show: true };

  togglePopup() {
    this.setState({ show: false });
  }

  render() {
    return (
      this.state.show && (
        <div className="popup">
          <div className="close-popup-container">
            <i class="close-popup-icon fas fa-times fa-2x" />
          </div>
          {this.props.children}
        </div>
      )
    );
  }
}

export default PopupContainer;
