import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function DisplayTender() {
  const navigate = useNavigate();
  const [tender, setTenders] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/getallTender");
    // console.log(response.data.data);
    setTenders(response.data.data);
  };

  const deleteTender = async (userID) => {
    await axios
      .delete(`http://localhost:5000/api/deleteTender/${userID}`)
      .then((response) => {
        // setTenders((prevUser) => prevUser.filter((user) => user._id));
        toast.success(response.data.msg, { position: "top-right" });
        // navigate("/");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(tender);

  return (
    <>
      <div className="container mt-5">
        <div className="col-md-8 offset-2">
          <Link to="/addtender" className="btn btn-primary btn-md mt-4 mb-3 ">
            Add Tender
          </Link>

          <table className="table table-success mt-4 mb-4">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Descripition</td>
                <td>Start_time</td>
                <td>End_time</td>
                <td>Buffer_time</td>
                <td>Actions_VED</td>
              </tr>
            </thead>
            <tbody>
              {tender.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.description}</td>
                    <td>{user.start_time}</td>
                    <td>{user.end_time}</td>
                    <td>{user.buffer_time}</td>
                    <td>
                      <Link to={`/view/` + user._id}>
                        <i class="fa-solid fa-eye"></i>
                      </Link>

                      <Link to={`/edit/` + user._id}>
                        <i class="fa-regular fa-pen-to-square ms-2"></i>
                      </Link>

                      <Link>
                        <i
                          class="fa-solid fa-trash ms-2"
                          onClick={() => deleteTender(user._id)}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DisplayTender;
