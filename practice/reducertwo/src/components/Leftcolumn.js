import React from "react";

function Leftcolumn(props) {
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
      <form className="p-3 shadow-sm border rounded" action="">
        <div class="mb-3">
          <label for="input2" class="form-label">
            input color
          </label>
          <input
            type="text"
            value={props.color}
            onChange={(e) => props.setColor(e.target.value)}
            class="form-control"
            id="input2"
          />
        </div>
        <div class="mb-3">
          <label for="input3" class="form-label">
            input font size in px
          </label>

          <input
            type="number"
            value={props.size}
            onChange={(e) => props.setSize(e.target.value)}
            class="form-control"
            id="input3"
          />
        </div>
        <button
          onClick={props.setLike(() => (prev) => prev + 1)}
          className="btn btn-info"
        >
          Like
        </button>
      </form>
    </div>
  );
}

export default Leftcolumn;
