import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pikachu: this.props.pikachu,
      charizard: this.props.charizard,
      blastoise: this.props.blastoise,
    };
  }
  render() {
    return (
      <>
        <h1>Heisann</h1>
        <button
          onClick={() => {
            this.whichPokemon("Go pokeball! (rotate caps)");
          }}
        >
          Catch pokemon
        </button>
        <p>{this.state.charizard}</p>
      </>
    );
  }
  whichPokemon(text) {
    this.setState({ charizard: text });
  }
}
