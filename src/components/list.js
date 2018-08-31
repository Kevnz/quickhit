import React, { Component } from "react";

import QuickHitContext from "../quickhit-context";

class ListBase extends Component {
  render() {
    const { context } = this.props;
    const items = context.items.map((i, index) => {
      return (
        <div className="form-row" key={`item-${i.id}`}>
          <input
            type="checkbox"
            checked={i.isDone}
            id={`checkbox$item${i.id}`}
            name={`checkbox$item${i.id}`}
            onChange={e => {
              i.isDone = !i.isDone;
              this.props.context.updateItem(i);
            }}
          />
          <label htmlFor={`checkbox$item${i.id}`}>{i.text}</label>
        </div>
      );
    });

    return (
      <div>
        <form className={this.props.context.showCompleted ? "show" : "hide"}>
          {items}
        </form>
      </div>
    );
  }
}

const List = () => (
  <QuickHitContext.Consumer>
    {context => <ListBase context={context} />}
  </QuickHitContext.Consumer>
);

export default List;
