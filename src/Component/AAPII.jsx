import React, { useEffect, useState } from "react";

function AAPII() {
  const [users, setUsers] = useState([]);
  const fetchuserData = () => {
    fetch("http://localhost:5000/api/getalluser")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  };
  useEffect(() => {
    fetchuserData();
  }, []);
  console.log(users);

  return (
    <div>
      <h1>Heyyy</h1>
      <>
        <div>
          {users.length > 0 && (
            <ul>
              {users.map((user) => (
                <li key={user._id}>
                  {user.name},{user.email},
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    </div>
  );
}

export default AAPII;
