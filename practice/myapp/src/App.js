import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("hello world");

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
    </>
  );
}

export default App;
