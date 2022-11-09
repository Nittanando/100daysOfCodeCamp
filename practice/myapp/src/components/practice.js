import { useReducer, useState } from "react";


const initialState = { votes: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "upvote":
      return { votes: state.votes + 1 };
    case "downvote":
      return { votes: state.votes - 1 };
    default:
      throw new Error();
  }
}
function Practice() {
    const [title, setTitle] = useState("hello world");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.votes);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  const Example = (e) => {
    <h2>e.name</h2>;
  };
  const isAuthUser = false;
  return (
    <>
      <div>{isAuthUser ? "user" : "log-in"}</div>
      <Example name="nittanando" />
      <h2>{title}</h2>
      <input type="text" onChange={handleChange} />

      <div>
        Current Votes: {state.votes}
        <button onClick={() => dispatch({ type: "upvote" })}>upvote</button>
        <button onClick={() => dispatch({ type: "downvote" })}>downvote</button>
      </div>
    </>
  )
}

export default Practice