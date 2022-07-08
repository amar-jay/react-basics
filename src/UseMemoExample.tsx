import React from "react";

function UseMemoExample() {
  const [name, setName] = React.useState("");
  const value = React.useMemo(() => {
    return name
      .split("")
      .filter((_, i) => i % 2 === 0)
      .join("");
  }, [name]);

  return (
    <div>
      <h1>⚜️ UseMemo: {value}</h1>
      <input
        name="input"
        placeholder="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName("");
        }}
      >
        clear
      </button>
    </div>
  );
}

export default UseMemoExample;
