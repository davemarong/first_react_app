import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.startCount,
    };
  }
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <button>-</button>
        <span>{this.state.number}</span>
        <button>+</button>
      </>
    );
  }
}
