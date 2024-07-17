import React, { useEffect, useState } from "react";

function UseEffeect() {
  // declare a new state varibael
  const [count, setCount] = useState(10);
  const [data, setdata] = useState(10);

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <>
      <p>You Clicked {count} times</p>
      <p>Your Daat {data} times</p>
      <button onClick={() => setCount(count + 1)}> Click ME </button> &nbsp;
      <button onClick={() => setdata(data + 1)}> Click ME </button>
    </>
  );
}

export default UseEffeect;
