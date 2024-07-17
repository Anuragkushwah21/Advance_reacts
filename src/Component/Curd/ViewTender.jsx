import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewTender() {
  const { id } = useParams();
  const [tender, setTender] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getTenderById/${id}`)
      .then((response) => {
        setTender(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(tender);

  return (
    <>
      <div className="container mt-5">
        <div className="col-md-8 offset-2">
          <table className="table table-success mt-4 mb-4">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Descripition</td>
                <td>Start_time</td>
                <td>End_time</td>
                <td>Buffer_time</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tender._id}</td>
                <td>{tender.name}</td>
                <td>{tender.description}</td>
                <td>{tender.start_time}</td>
                <td>{tender.end_time}</td>
                <td>{tender.buffer_time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewTender;
