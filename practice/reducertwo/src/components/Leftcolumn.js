import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Leftcolumn(props) {
    const {color, setColor, size, setSize, handleLike, darkMode} = useContext(AppContext);
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
    <div className={`p-3 shadow-sm border rounded ${darkMode ? "bg-dark text-light" : ""}`}>
      <form className="" action="">
        <div className="mb-3">
          <label className="form-label">input color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="form-control"
            id="input2"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">input font size in px</label>

          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="form-control"
            id="input3"
          />
        </div>
        
      </form>
      <button
          onClick={handleLike}
          className="btn btn-info"
        >
          Like
        </button>
        </div>
    </div>
  );
}

export default Leftcolumn;
