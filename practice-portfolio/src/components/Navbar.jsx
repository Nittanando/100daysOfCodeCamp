import React from "react";
import Dropdown from "./Dropdown";
import { DiCodeBadge } from "react-icons/di";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <span className="d-flex align-items-center">
        <span className="mx-2 menu-items">
          <Link className="logo">
            <span>
              <DiCodeBadge />
            </span>
            <span>Sarkar</span>
          </Link>
        </span>
        <span className="mx-2 title-font-size menu-items">
          <Dropdown />
        </span>
        <span className="mx-2 title-font-size menu-items">Projects</span>
      </span>
    </nav>
  );
};

export default Navbar;
