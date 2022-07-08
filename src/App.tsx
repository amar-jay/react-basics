import React from "react";
import logo from "./logo.svg";
import "./App.css";

import UseEffectExample from "./UseEffectExample";
import UseStateExample from "./UseStateExample";
import UseContextExample from "./UseContextExample";
import UseReducerExample from "./UseReducerExample";
import UseMemoExample from "./UseMemoExample";

function App() {
  return (
    <div className="App">
      <UseContextExample />
      <UseStateExample />
      <UseEffectExample />
      <UseReducerExample />
      <UseMemoExample />
    </div>
  );
}

export default App;
