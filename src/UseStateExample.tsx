import React from "react";

function UseStateExample() {
  const [list, setList] = React.useState<number[]>([]);
  const [num, setNum] = React.useState(0);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input
        name="input"
        placeholder="input"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        onClick={(e) => {
          !!(list && num) && setList([...list, num]);
          setNum(0);
        }}
      >
        click
      </button>
      <button
        onClick={(e) => {
          setList([]);
        }}
      >
        clear
      </button>
    </div>
  );
}

export default UseStateExample;
