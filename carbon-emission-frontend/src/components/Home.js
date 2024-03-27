import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Carbon emissions: industrial progress, ecological distress</h1>
            <h2>
            Climate change is a reality that is happening now, and it is happening to all of us.
            </h2>
            <div class="d-flex">
              <Link to="/form" class="btn-get-started scrollto">
                Get Started
              </Link>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="https://bootstrapmade.com/demo/templates/eNno/assets/img/hero-img.png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
