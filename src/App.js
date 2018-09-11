import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import MenuLayout from "./MenuLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuLayout />
      </BrowserRouter>
    );
  }
}

export default App;
