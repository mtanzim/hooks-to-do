import React, { useEffect, useState } from "react";
export function StressPanda() {
  // Note the ES6 array destructuring
  // The return value of useState is the reactive state value, and its setter
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Panda's anger level rising");
    // optional clean up function
    // Note that the clean up will happen every time there is an upcoming re-render
    // to clean up from the previous render
    return () => console.log("Panda is calm again!");
    // dependency array
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>🐼</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
