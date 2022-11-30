import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Header() {
    const {like, darkMode, setDarkMode} = useContext(AppContext)
  return (
    <div className={`p-3 border rounded shadow-sm ${darkMode ? "bg-dark text-light" : ""}`}>
      <div className="col-12 d-flex justify-content-between align-items-center">
        <span>
          <h3 className="">I am a dynamic React Application</h3>
          <span>
            I have <strong>{like}</strong> Likes & currently on Light mode.
          </span>
        </span>
        <i onClick={()=>setDarkMode(!darkMode)} className="fa-solid fa-gear fs-3"></i>
      </div>
    </div>
  );
}

export default Header;
