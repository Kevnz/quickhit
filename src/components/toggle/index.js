import QuickHitContext from "../../quickhit-context";
import React from "react";
import ToggleBase from "./toggle";

const Toggle = props => (
  <QuickHitContext.Consumer>
    {context => <ToggleBase {...props} {...context} />}
  </QuickHitContext.Consumer>
);

export default Toggle;
