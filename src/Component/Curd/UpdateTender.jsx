import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateTender() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tender = {
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    buffer_time: "",
  };

  const [data, setData] = useState(tender);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getTenderById/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const inputHandler = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/updateTender/${id}`,
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
              Edit Tender{" "}
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
                  type=""
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={data.start_time}
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
                  type=""
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Time"
                  value={data.end_time}
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
                  value={data.buffer_time}
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

export default UpdateTender;
