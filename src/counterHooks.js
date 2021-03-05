import React, { useState } from "react";

export default function CounterHooks({ startCount }) {
  const [state, setState] = useState({ count: startCount });
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
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        +
      </button>
    </>
  );
}
