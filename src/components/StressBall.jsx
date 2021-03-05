import React, { useState } from "react";
export function StressBall() {
  // Note the ES6 array destructuring
  // The return value of useState is the reactive state value, and its setter
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>🥎</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
