import { useState } from "react";

export function Counter() {
  const [counter, SetCounter] = useState(0);

  function increment() {
    SetCounter(counter + 1);
  }

  return (
    <div>
      <h3>{counter}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}