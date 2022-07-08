import React, { createContext, useContext, useState } from "react";
import UseEffectExample from "./UseEffectExample";

interface ITodoState {
  todo: string;
  todos: string[];
  addTodo(todo: string[]): void;
  setTodo: (todo: string) => void;
}
const initialState = {
  todo: "",
  setTodo: (todo: string) => {},
  addTodo: (todo: string[]) => {},
  todos: [],
};

const MyContext = createContext<ITodoState>(initialState);

function InputCountainer() {
  const ctx = useContext(MyContext);

  return (
    <div>
      <input
        name="input"
        placeholder="input"
        value={ctx.todo}
        onChange={(e) => ctx.setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          ctx.addTodo([...ctx.todos, ctx.todo]);
          ctx.setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
function TodoList() {
  const ctx = useContext(MyContext);

  return (
    <div>
      <h1>🎃 {ctx.todo}</h1>
      <ul>
        {ctx.todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function Container({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
function UseContextExample() {
  const [todo, setTodo] = useState("");
  const [todos, addTodo] = useState<string[]>([]);
  // let's make a todo list instead of a counter
  return (
    <MyContext.Provider value={{ todo, setTodo, todos, addTodo }}>
      <Container>
        <h1> Use Context</h1>
        <TodoList />
        <InputCountainer />
      </Container>
    </MyContext.Provider>
  );
}

export default UseContextExample;
