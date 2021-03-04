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
        <button
          onClick={() => {
            this.calcCount(-1);
          }}
        >
          -
        </button>
        <span>{this.state.number}</span>
        <button
          onClick={() => {
            this.calcCount(1);
          }}
        >
          +
        </button>
      </>
    );
  }
  calcCount(num) {
    this.setState({ number: this.state.number + num });
  }
}
