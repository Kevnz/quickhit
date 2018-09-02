import "./list.css";

import React, { Component } from "react";

class ListBase extends Component {
  render() {
    const { items } = this.props;

    const itemList = items.map((i, index) => {
      return (
        <div
          className={`form-row ${i.isDone ? "completed" : ""}`}
          key={`item-${i.id}`}
        >
          <input
            type="checkbox"
            checked={i.isDone}
            id={`checkbox$item${i.id}`}
            name={`checkbox$item${i.id}`}
            onChange={e => {
              i.isDone = !i.isDone;
              this.props.updateItem(i);
            }}
          />
          <label htmlFor={`checkbox$item${i.id}`}>{i.text}</label>
        </div>
      );
    });
    console.log("this", this.props);
    return (
      <div className="items">
        <form className={this.props.showCompleted ? "show" : "hide"}>
          {itemList}
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default ListBase;
