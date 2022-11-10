import React, { useState } from "react";
import Logolg from "../../asset/image/pe-logo.png";
import "./navbar.scss";

function Navbar(props) {
  const [navToggle, setNavToggle] = useState(false);
  const toggle = () => {
    props.onToggle();
    setNavToggle(!navToggle);
  };
  return (
    <div className="nav-area">
      <div className="logo-section">
        <img src={Logolg} alt="logo" />
      </div>
      <div className="nav-content-area">
        <i onClick={toggle} className="fa-solid fa-bars"></i>
        <div className="profile-area">
          <div className="profile-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <span>
            <h4>Nittanando Sarkar</h4>
            <h5>Admin</h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
