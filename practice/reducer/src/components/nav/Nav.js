import React, { useState } from "react";
import logo from "../../asset/image/svg/logo.svg";

function Nav() {
  const [navScroll, setNavScroll] = useState(false);

  const NavOnScroll = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", NavOnScroll);

  return (
    <nav
      className={`navbar navbar-dark fixed-top mx-2 ${
        navScroll ? "bg-dark mt-0" : "bg-transparent mt-2"
      }`}
    >
      <div className="d-flex align-items-center justify-content-between w-100 ps-3 pe-3">
        <span className="p-2 shadow-sm" style={{ border: "3px solid azure" }}>
          <img
            style={{ height: "3.5rem", backgroundColor: "darkcyan" }}
            className="p-1 home-logo"
            src={logo}
            alt="Roy & Associate"
          />
        </span>

        <span className="d-flex align-items-center">
          <a className="text-light text-decoration-none me-4 mb-1" href="#">
            Sign in
          </a>

          <button
            className="me-3 p-0 bg-transparent border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="bi bi-menu-button-wide-fill text-light fs-3"></i>
          </button>

          <div
            className="offcanvas bg-dark p-3 text-light offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="border h-100">
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close text-reset bg-light mt-2 ms-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body mt-3">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className="w-75 mb-3 p-3 border">
                    <button className="btn btn-info rounded-0 w-100">
                      Home
                    </button>
                  </div>
                  <div className="w-75 mb-3 p-3 border">
                    <button className="btn btn-primary rounded-0 w-100">
                      About
                    </button>
                  </div>
                  <div className="w-75 mb-3 p-3 border">
                    <button className="btn btn-danger rounded-0 w-100">
                      Contact
                    </button>
                  </div>
                  <div className="w-75 mb-3 p-3 border">
                    <button className="btn btn-light rounded-0 w-100">
                      Projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
