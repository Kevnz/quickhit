import React, { Component } from "react";

import QuickHitContext from "../quickhit-context";

class EntryBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCompleted: true
    };
    this.input = React.createRef();
    this.handleItemEntry = this.handleItemEntry.bind(this);
  }
  handleItemEntry(event) {
    const target = event.target;

    if (event.key !== "Enter") return;

    const value = target.value;
    const text = value.trim();
    if (text.length === 0 || text === "") return;

    this.props.context.saveItem({
      id: Date.now(),
      text,
      isDone: false
    });
    this.input.current.value = "";
  }

  render() {
    return (
      <div className="container-input">
        <input
          className="task-input"
          type="text"
          ref={this.input}
          onKeyPress={this.handleItemEntry}
        />
      </div>
    );
  }
}

const Entry = () => (
  <QuickHitContext.Consumer>
    {context => <EntryBase context={context} />}
  </QuickHitContext.Consumer>
);

export default Entry;
