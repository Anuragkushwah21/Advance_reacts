import axios from "axios";
import React, { useEffect, useState } from "react";

function APIAdmission() {
  //   const [content, setContent] = useState("posts");
  //   const [count, setcount] = useState(0);
  // map
  const [users, setUsers] = useState("name");

  const uselist = async () => {
    const res = await axios.get("http://localhost:5000/api/getalluser");
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    uselist();
  }, []);

  return (
    <>
      {/* <button onClick={() => setContent("posts")}>Posts</button>

      <button onClick={() => setContent("users")}>Users</button>

      <button onClick={() => setContent("comments")}>Comment</button>
      <h1>{content}</h1>

      <button onClick={() => setcount(count + 1)}>Count</button> */}

      {/* <ul>
        {items.map((items) => {
          return <li key={items.id}>{items.id}</li>;
        })}
      </ul> */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>nakul</td>
            <td>nakul@121212gmail.com</td> */}
          </tr>
          {users.map((items) => (
            <tr>
              <td>nakul</td>
              <td>{items.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default APIAdmission;
