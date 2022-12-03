import React from "react";
import ladyJustice from "../../asset/image/png/lady-justice2.png";
import ServiceCard from "./ServiceCard";

function Home() {
  return (
    <div>
      <div className="vh-100 position-relative home-bg-img">
        <div
          className="h-100 home-text-overlay w-50 position-absolute bg-dark d-flex align-items-center justify-content-center"
          style={{ opacity: 0.8, zIndex: 1 }}
        >
          <div className="text-light ms-1 ms-md-5 ms-lg-5 ms-sm-2 p-5 fw-bold home-line-style home-line2-style">
            <span className="home-title" style={{ fontSize: "3.5rem" }}>
              Your <strong className="text-danger">Problem,</strong> our{" "}
              <strong className="text-info">Solution.</strong>
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              sequi, voluptatibus numquam dignissimos at maiores rerum ab ut
              doloremque nesciunt!
            </p>
            <div
              className="p-3"
              style={{ width: "fit-content", border: "2px solid azure" }}
            >
              <button className="btn btn-info rounded-0 btn-info">
                Know More
              </button>
            </div>
          </div>
        </div>

        <div className="position-relative w-50 h-100 float-end d-none d-lg-block">
          <img
            className="position-absolute lady-justice"
            src={ladyJustice}
            alt="img"
          />
        </div>
      </div>
      <div className="container-fluid service-card-bg-img position-relative">
        <h3 className="roy text-light">Roy</h3>
        <h3 className="and text-light">&</h3>
        <h3 className="associate text-light">Associates</h3>

        <div
          className="container mt-2 py-5 d-flex justify-content-center flex-wrap"
          style={{ gap: "2rem" }}
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
