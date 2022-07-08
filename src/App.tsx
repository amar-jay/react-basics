import React from "react";
import logo from "./logo.svg";
import "./App.css";

import UseEffectExample from "./UseEffectExample";
import UseStateExample from "./UseStateExample";
import UseContextExample from "./UseContextExample";
import UseReducerExample from "./UseReducerExample";

function App() {
  return (
    <div className="App">
      <UseContextExample />
      <UseStateExample />
      <UseEffectExample />
      <UseReducerExample />
      
    </div>
  );
}

export default App;
