import React from "react";

function ArratList_with_Map_Function() {
  const student = [
    { name: "nakul", email: "nakulpal757@gmail.com", phone: "1234" },
    { name: "ram", email: "ram3457@gmail.com", phone: "9634345" },
    { name: "raj", email: "raj757@gmail.com", phone: "111111" },
    { name: "paul", email: "paul57@gmail.com", phone: "94634596543" },
  ];
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>

        <tbody>
          {student.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArratList_with_Map_Function;
