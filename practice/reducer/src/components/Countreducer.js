import React, { useReducer, useState } from "react";

function Countreducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { rCount: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return { rCount: state.rCount + 1 };
      case "SUB":
        return { rCount: state.rCount - 1 };

      default:
        return state;
    }
  }

  return (
    <div>
      <h2>Count example using useState</h2>
      <span className="count">
        <span
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="count-child c-pointer"
        >
          +
        </span>
        <span className="count-child">{count}</span>
        <span
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className="count-child c-pointer"
        >
          -
        </span>
      </span>

      <h2>Count example using useReducer</h2>

      <span className="count">
        <span
          onClick={() => dispatch({ type: "ADD" })}
          className="count-child c-pointer"
        >
          +
        </span>
        <span className="count-child">{state.rCount}</span>
        <span
          onClick={() => dispatch({ type: "SUB" })}
          className="count-child c-pointer"
        >
          -
        </span>
      </span>
    </div>
  );
}

export default Countreducer;
