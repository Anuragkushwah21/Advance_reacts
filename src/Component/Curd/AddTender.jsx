import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function AddTender() {
  const tender = {
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    buffer_time: "",
  };

  const [data, setData] = useState(tender);

  const inputHandler = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/inserttender",
        data
      );
      if (response.status === 200) {
        toast.success(response.data.message, { position: "top-center" });
        setData(tender);
        // Redirect
        navigate("/");
      } else {
        console.error("falied to insert data");
      }
    } catch (error) {
      console.error("error inserting Data", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 offset-4 ">
            <Link to="/">Back</Link>

            <h1 style={{ fontFamily: "sans-serif", fontStyle: "revert" }}>
              Add Tender
            </h1>

            <form onSubmit={submitForm}>
              <div className="form-group">
                <label for="exampleFormControlInput1" className="mt-1">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  autoComplete="off"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={inputHandler}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1" className="mt-1">
                  Descripition
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Descripition"
                  value={data.description}
                  onChange={inputHandler}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1" className="mt-1">
                  Start time
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                  onChange={inputHandler}
                  name="start_time"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1" className="mt-1">
                  End Time
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Time"
                  onChange={inputHandler}
                  name="end_time"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1" className="mt-1">
                  Buffer Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Buffer Time"
                  onChange={inputHandler}
                  name="buffer_time"
                />
              </div>
              <center>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-4"
                >
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTender;
