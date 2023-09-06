import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <header className="header border-bottom border-top">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="categories border-bottom d-flex align-items-center justify-content-around">
            <i className="fa-solid fa-border-all fs-4"></i>
            <h4 className="mb-0">
              Categories <i className="fa fa-chevron-down fs-6"></i>
            </h4>
          </div>
          <div
            className={`nav-links position-relative ${
              mobileMenu ? "overflow-visible" : "overflow-hidden"
            }`}
          >
            <ul
              className={`d-flex align-items-center mb-0 ${
                mobileMenu ? "flex-column show" : "flex-row"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/vendor-account">Vendor Account</Link>
              </li>
              <li>
                <Link to="/user-account">User Account</Link>
              </li>
              <li>
                <Link to="/track-my-order">Track My Order</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button
              className="toggle border-0 bg-transparent"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <i className="fas fa-times fs-4"></i>
              ) : (
                <i className="fas fa-bars fs-4"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
