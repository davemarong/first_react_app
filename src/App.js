import React, { useState } from "react";
import Counter from "./counter.js";
import CounterHooks from "./counterHooks.js";
import Pokemon from "./Pokemon.js";

export const themeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <>
      <themeContext.Provider value={{ backgroundColor: theme }}>
        <Counter startCount={4} name={"Dave"} />
        <div></div>
        <Pokemon
          pikachu={"Nope..."}
          charizard={"Nope..."}
          blastoise={"Nope..."}
        />
        <div></div>
        <CounterHooks startCount={0} name={"bro"} />
        <button
          onClick={() => {
            return setTheme((prevTheme) => {
              return prevTheme === "red" ? "blue" : "red";
            });
          }}
        >
          Toggle theme
        </button>
      </themeContext.Provider>
    </>
  );
}

export default App;
