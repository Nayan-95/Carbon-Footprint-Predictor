import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Data = () => {
  return (
    <section class="vh-100" style={{backgroundColor:"#eee"}}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{borderRadius:"25px"}}>
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <form class="" style={{marginLeft:"6rem"}}>
                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Name" variant="standard" />
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Address" variant="standard" />
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Mobile Number" variant="standard" />
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Email" variant="standard" />
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Password" variant="standard" />
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Education" variant="standard" />
                      </div>

                      {/* <div class="d-flex flex-row align-items-center mb-2">
                      <TextField id="standard-basic" label="Salary" variant="standard" />
                      </div> */}

                      <div class="d-flex">
                        <Link to="/result" class="btn btn-primary btn-lg">
                          Result
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
