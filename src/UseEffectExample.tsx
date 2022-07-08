import React, { useEffect, useState } from "react";

function UseEffectExample({ c }: { c?: number }) {
  const [count, setCount] = useState(0);
  if (c) {
    setCount(c);
  }

  //clocures trap variables
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1> Count: {count}</h1>
      <input
        name="input"
        placeholder="input"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        onClick={(e) => {
          setCount(0);
        }}
      >
        clear
      </button>
    </div>
  );
}

export default UseEffectExample;
