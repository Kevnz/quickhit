import React, { Component } from "react";

import Entry from "./components/entry";
import List from "./components/list";
import QuickHitProvider from "./quickhit-provider";
import Toggle from "./components/toggle";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <QuickHitProvider>
          <div className="items">
            <Toggle />
            <List />
            <Entry />
          </div>
        </QuickHitProvider>
      </div>
    );
  }
}

export default App;
