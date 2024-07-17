import React, { useState } from "react";

function Bid() {
  const { name, setName } = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:42000/api/bidinsert", {
      method: "post",
      body: JSON.stringify({ name, email, mobile, charge, days }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    localStorage.setItem("Product", JSON.stringify(result));
  };

  return (
    <>
      <h1>Hey</h1>
      <form onSubmit={collectData}>
        <label htmlFor="">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button></button>
      </form>
    </>
  );
}

export default Bid;
