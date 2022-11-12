// import { useReducer, useState } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [toggle, setToggle] = useState("false");
  function SwapMenu() {
    // setToggle((prevState) => !prevState);
    setToggle(!toggle);
  }
  return (
    <div>
      <Navbar onToggle={SwapMenu} />
      <Sidebar toggle={toggle} />
    </div>
  );
}

export default App;
