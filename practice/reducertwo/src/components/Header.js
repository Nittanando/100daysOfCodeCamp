import React from "react";

function Header(props) {
  return (
    <div className="p-3 border rounded shadow-sm">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <span>
          <h3 className="">I am a dynamic React Application</h3>
          <span>
            I have <strong>{props.like}</strong> Likes & currently on Light
            mode.
          </span>
        </span>
        <i className="fa-solid fa-gear fs-3"></i>
      </div>
    </div>
  );
}

export default Header;
