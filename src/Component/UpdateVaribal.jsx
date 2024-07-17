import React from "react";

function UpdateVaribal() {
  let data = "PAul";

  const updateData = () => {
    let data = "shayam";
    alert(data);
  };
  console.log("Heelo component");
  return (
    <>
      <h1>hey {data}</h1>
      <button onClick={updateData} onChange={updateData}>
        Update Data
      </button>
    </>
  );
}

export default UpdateVaribal;
