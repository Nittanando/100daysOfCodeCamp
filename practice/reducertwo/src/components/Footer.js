import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Footer() {
  const state = useContext(AppContext);
  console.log("re-rendering");
  return (
    <footer
      className={`navbar position-absolute bottom-0 w-100 ${
        state.darkMode ? "navbar-light bg-info" : "navbar-dark bg-dark"
      }`}
    >
      <h1 className="navbar-brand fs-1 text-center p-1 w-100">
        React Application
      </h1>
    </footer>
  );
}

export default Footer;
