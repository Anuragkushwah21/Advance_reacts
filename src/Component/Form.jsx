import React, { useState } from "react";

function Form() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [city, setcity] = useState();
  const [address, setaddress] = useState();

  const insertData = (e) => {
    e.preventDefault();
    console.log(name, email, city, address);
  };
  return (
    <div>
      {/* <h1>Form</h1> */}
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-4 offset-4">
            <form onSubmit={insertData}>
              {/* <!-- Heading (Register Here) --> */}
              <h1 className="mb-5 mt-5 text-center">Form</h1>

              {/* <!-- User Name --> */}
              <div className="row mb-4">
                <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                  Name
                </div>
                <div className="col-lg-10">
                  <input
                    className="form-control text-capitalize"
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="row mb-3">
                <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                  Email
                </div>
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>

              {/* <!-- Password --> */}
              <div className="row mb-4">
                <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                  City
                </div>
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    placeholder="City"
                    type="text"
                    required
                    onChange={(e) => setcity(e.target.value)}
                  />
                </div>
              </div>

              {/* <!-- Confirm Password --> */}
              <div className="row mb-4">
                <div className="col-lg-3 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                  Address
                </div>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    placeholder="Address"
                    type="text"
                    required
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </div>
              </div>

              <br />

              {/* <!-- Button (Login) --> */}
              <center>
                <button className="btn btn-primary mb-5 btn-lg">Submit</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
