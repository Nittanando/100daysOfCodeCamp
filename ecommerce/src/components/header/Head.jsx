import React from "react";
import { Link } from "react-router-dom";
// import flag from "../../assets/media/images/png/bangladesh.png";

const Head = () => {
  return (
    <>
      <section className="head py-2 text-white">
        <div className="col-md-12">
          <div className="row g-0">
            <div className="col-6 d-flex align-items-center">
              <i className="fa-solid fa-phone ms-3"></i>
              <Link to="" className="ms-3">
                +880 1303 458172
              </Link>
              <i className="fa-solid fa-envelope ms-3"></i>
              <Link to="" className="ms-3">
                example@gmail.com
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <Link to="" className="me-3">
                FAQ
              </Link>
              <Link to="" className="me-3">
                Need Help ?
              </Link>
              {/* <img className="flag me-3" src={flag} alt="Bangladesh" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
