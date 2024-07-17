import React, { useState } from "react";

function Usestate1() {
  // declare a new state varibael
  const [count, setCount] = useState(10);
  return (
    <>
      <p>You Clicked {count} time</p>
      <button onClick={() => setCount(count + 2)}> Click ME </button>
    </>
  );
}

export default Usestate1;
