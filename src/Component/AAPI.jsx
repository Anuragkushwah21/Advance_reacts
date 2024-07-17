// import React, { useEffect, useState } from "react";

// function AAPI() {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/getalluser")
//       .then((response) => response.json())
//       .then((data) => setRecords(data))
//       .catch((err) => console.log(err));
//   }, []);
//   //   console.log(list);
//   return (
//     <>
//       <h1>hey</h1>
//       <ul>
//         {records.map((list, index) => (
//           <li key={index}>{list.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default AAPI;

import axios from "axios";
import React, { useState } from "react";

function AAPI() {
  const [quote, setQuote] = useState("");
  const getQuite = () => {
    axios
      .get("http://localhost:5000/api/getalluser")
      .then((res) => {
        console.log(res.data.data);
        setQuote(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>HEy</h1>
      <div>
        <button onClick={getQuite}> getQuite </button>
      </div>
    </>
  );
}

export default AAPI;
