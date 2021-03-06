import React, { useState, useContext } from "react";
import themeContext from "./App.js";

export default function CounterHooks({ startCount }) {
  const [state, setState] = useState({ count: startCount });
  const style = useContext(themeContext);
  return (
    <>
      <h1>CounterHooks</h1>
      <button
        onClick={() => {
          setState({ count: state.count - 1 });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        style={style}
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        +
      </button>
    </>
  );
}
