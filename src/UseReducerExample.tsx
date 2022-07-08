import React, { useReducer } from "react";

const initialState = {
  cookies: 0,
  name: "",
};

type ACTIONS =
  | {
      type: "ADD_COOKIE";
      payload: number;
    }
  | {
      type: "REMOVE_COOKIE";
      payload: number;
    }
  | {
      type: "SET_NAME";
      payload: string;
    };

const cookieReducer = (state: typeof initialState, action: ACTIONS) => {
  switch (action.type) {
    case "ADD_COOKIE":
      return { ...state, cookies: state.cookies + action.payload };
    case "REMOVE_COOKIE":
      return { ...state, cookies: state.cookies - action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
};

function UseReducerExample({ c }: { c?: number }) {
  const [state, dispatch] = useReducer(cookieReducer, initialState);
  if (c) {
    dispatch({ type: "ADD_COOKIE", payload: c });
  }
  return (
    <div>
      <h1> Count: {state.cookies}   Name: {state.name}</h1>
      <input
        name="input"
        placeholder="input"
        value={state.cookies}
        onChange={(e) =>
          dispatch({ type: "ADD_COOKIE", payload: Number(e.target.value) })
        }
      />
      <input
        name="name"
        placeholder="set a name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_COOKIE", payload: 1 });
        }}
      >
        remove
      </button>
    </div>
  );
}
export default UseReducerExample;
