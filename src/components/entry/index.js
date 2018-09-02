import EntryBase from "./entry";
import QuickHitContext from "../../quickhit-context";
import React from "react";

const Entry = props => (
  <QuickHitContext.Consumer>
    {context => <EntryBase {...props} {...context} />}
  </QuickHitContext.Consumer>
);

export default Entry;
