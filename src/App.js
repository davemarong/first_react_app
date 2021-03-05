import React from "react";
import Counter from "./counter.js";
import CounterHooks from "./counterHooks.js";
import Pokemon from "./Pokemon.js";

function App() {
  return (
    <>
      <Counter startCount={4} name={"Dave"} />
      <div></div>
      <Pokemon
        pikachu={"Nope..."}
        charizard={"Nope..."}
        blastoise={"Nope..."}
      />
      <div></div>
      <CounterHooks startCount={0} name={"bro"} />
    </>
  );
}

export default App;
