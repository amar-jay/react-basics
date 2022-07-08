import React, { createContext, useContext, useState } from "react";
import UseEffectExample from "./UseEffectExample";

interface ITodoState {
  todo: string;
  todos: string[] | undefined;
}
const initialState = {
  todos: ["do something", "do something else"],
  todo: "",
};

const MyContext = createContext<ITodoState>(initialState);

function InputCountainer() {
  const ctx = useContext(MyContext);

  return (
    <div>
      <h1> Enter a todo:</h1>
      <input name="input" placeholder="input" value={ctx.todo} />
      <button onClick={(e) => {}}>Add</button>
    </div>
  );
}
function TodoList() {
  const ctx = useContext(MyContext);

  return (
    <div>
      <h1> Todo List:</h1>
      {ctx.todos!.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
}
function Container({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
function UseContextExample() {
  const [count, setCount] = useState(0);

  // let's make a todo list instead of a counter
  return (
    <MyContext.Provider value={initialState}>
      <Container>
        <InputCountainer />
        <TodoList />
      </Container>
    </MyContext.Provider>
  );
}

export default UseContextExample;
