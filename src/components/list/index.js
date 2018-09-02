import ListBase from "./list";
import QuickHitContext from "../../quickhit-context";
import React from "react";
const List = props => (
  <QuickHitContext.Consumer>
    {context => <ListBase {...props} {...context} />}
  </QuickHitContext.Consumer>
);

export default List;
