import React, { Component } from "react";

import QuickHitContext from "../quickhit-context";

class ToggleBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCompleted: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.context.toggleItems(value);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container-toggle">
        <input
          className="toggle"
          id="displayCompleted"
          name="displayCompleted"
          type="checkbox"
          checked={this.state.displayCompleted}
          onChange={this.handleInputChange}
        />
        <label className="toggle" htmlFor="displayCompleted">
          {" "}
        </label>
      </div>
    );
  }
}

const Toggle = () => (
  <QuickHitContext.Consumer>
    {context => <ToggleBase context={context} />}
  </QuickHitContext.Consumer>
);

export default Toggle;
