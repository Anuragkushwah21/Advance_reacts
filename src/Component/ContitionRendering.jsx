import React from "react";

const MyFun = () => {
  let age = 20;
  if (age >= 18) {
    return (
      <>
        <h1>Eligible for vote</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Not Eligible for vote</h1>
      </>
    );
  }
};

function ContitionRendering() {
  let age = 12;
  let result;

  if (age > 18) {
    result = <h1>You Can Vote</h1>;
  } else {
    result = <h1>You Can't Vote</h1>;
  }
  return (
    <>
      <h1>Hello {result} </h1>
      <MyFun />
      {/* ternary operator */}
      <div>
        {age > 18 ? <h1>Eligible for vote</h1> : <h1>Not Eligible for vote</h1>}
      </div>
    </>
  );
}

export default ContitionRendering;
