import React, { useState } from "react";

function UseState() {
  const [data, setData] = useState("ram");

  const updateData = () => {
    setData("PAul");
  };

  const Updatevaribale = (a) => {
    setData(a);
  };

  console.log("render");
  return (
    <>
      <h1>Use State {data} </h1>
      <button onClick={updateData}>Update DAta</button> <br />
      <button onClick={() => setData("NAkul")}>Update DAta 12</button> <br />
      <button onClick={() => Updatevaribale("Nakul pal")}>
        Update DAta 12 34
      </button>
    </>
  );
}

export default UseState;
