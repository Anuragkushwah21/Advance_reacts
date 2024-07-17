import { useEffect, useState } from "react";

function GetApi() {
  const [users, setUsers] = useState([]);
  const fetchuserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchuserData();
  }, []);
  return (
    <>
      <div>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default GetApi;
