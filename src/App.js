import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from './Components/Main';

// Test

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main />
          {/* <MenuLayout /> */}
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
