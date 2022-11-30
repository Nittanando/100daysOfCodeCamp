import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Nav() {
  const { darkMode } = useContext(AppContext);
  return (
    <nav
      className={`navbar ${
        darkMode ? "navbar-light bg-info" : "navbar-dark bg-dark"
      }`}
    >
      <h1 className="navbar-brand fs-1 p-1 ps-3">React Application</h1>
    </nav>
  );
}

export default Nav;
