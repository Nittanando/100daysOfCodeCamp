import React from "react";

function ServiceCard() {
  return (
    <div
      className="card p-3 bg-dark text-light rounded-0 mb-4"
      style={{
        minWidth: "20rem",
        flex: 1,
        opacity: 0.8,
      }}
    >
      <div className="border">
        <div className="p-5 d-flex align-items-center justify-content-center">
          <span
            className="p-2 bg-secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{ height: "70px", width: "70px" }}
          >
            <i className="bi bi-file-earmark-medical fs-1 mt-1"></i>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Income Tax</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            cupiditate perferendis quos voluptas fugiat impedit!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
