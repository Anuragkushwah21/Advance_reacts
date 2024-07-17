import React from "react";

function ReUseComponent(props) {
  return (
    <div>
      <h1>HEy</h1>
      <span>{props.data.name}</span>
      <br />
      <span>{props.data.email}</span>
      <br />
      <span>{props.data.phone}</span>
    </div>
  );
}

export default ReUseComponent;
