import React, { useReducer } from "react";

function Toggle() {
  const [state, dispatch] = useReducer(reducer, { toggle: "" });

  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        return { toggle: state.toggle };
    }
  }

  return (
    <div className="toggle-main">
      <div className="toggle-sub">
        <button>Toggle</button>
      </div>
    </div>
  );
}

export default Toggle;
