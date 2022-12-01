import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import ReducerContext from "../ReducerContext";

function Header() {
  const state = useContext(AppContext);
  const dispatch = useContext(ReducerContext);
  return (
    <div
      className={`p-3 border rounded shadow-sm ${
        state.darkMode ? "bg-dark text-light" : ""
      }`}
    >
      <div className="col-12 d-flex justify-content-between align-items-center">
        <span>
          <h3 className="">I am a dynamic React Application</h3>
          <span>
            I have <strong>{state.like}</strong> Likes & currently on Light
            mode.
          </span>
        </span>
        <i
          onClick={() =>
            dispatch({
              type: "DARK_MODE",
            })
          }
          className="fa-solid fa-gear fs-3"
        ></i>
      </div>
    </div>
  );
}

export default Header;
