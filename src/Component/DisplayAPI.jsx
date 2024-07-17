import axios from "axios";
import React, { useEffect, useState } from "react";

function DisplayAPI() {
  const [users, setusers] = useState([]);

  const useList = async () => {
    const res = await axios.get("http://localhost:5000/api/getalluser");
    // console.log(data.data);
    setusers(res.data.data);
  };

  useEffect(() => {
    useList();
  }, []);
  console.log(users);

  return (
    <div>
      <h1>Display</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <img src={item.image.url} alt="" className="h-50 w-50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayAPI;
