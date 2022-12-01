import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import ReducerContext from "../ReducerContext";

function Leftcolumn(props) {
  const state = useContext(AppContext);
  const dispatch = useContext(ReducerContext);
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
      <div
        className={`p-3 shadow-sm border rounded ${
          state.darkMode ? "bg-dark text-light" : ""
        }`}
      >
        <form className="" action="">
          <div className="mb-3">
            <label className="form-label">input color</label>
            <input
              type="text"
              value={state.color}
              onChange={(e) =>
                dispatch({ type: "COLOR", value: e.target.value })
              }
              className="form-control"
              id="input2"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">input font size in px</label>

            <input
              type="number"
              value={state.size}
              onChange={(e) =>
                dispatch({ type: "SIZE", value: e.target.value })
              }
              className="form-control"
              id="input3"
            />
          </div>
        </form>
        <button
          onClick={() => dispatch({ type: "INCREMENT_LIKE" })}
          className="btn btn-info"
        >
          Like
        </button>
      </div>
    </div>
  );
}

export default Leftcolumn;
