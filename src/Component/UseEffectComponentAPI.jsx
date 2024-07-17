import React, { useEffect, useState } from "react";

function UseEffectComponentAPI() {
  const [content, setContent] = useState("name");
  const [count, setcount] = useState(0);
  // map
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com" + content)
      .then((response) => response.json())
      //   .then(json => console.log(json))
      .then((json) => setItems(json));
    console.log("ComponentDidUpdate");
    return () => {
      // Cleaning
      console.log("Unmount");
    };
  }, [content]);
  console.log(items);
  return (
    <>
      <button onClick={() => setContent("name")}>Posts</button>

      <button onClick={() => setContent("email")}>Users</button>

      <button onClick={() => setContent("comments")}>Comment</button>
      <h1>{content}</h1>

      <button onClick={() => setcount(count + 1)}>Count</button>

      <ul>
        {items.map((items) => {
          return <li key={items.id}>{items.name}</li>;
        })}
      </ul>
    </>
  );
}

export default UseEffectComponentAPI;
