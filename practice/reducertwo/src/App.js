import { useState } from "react";
import "./App.css";
// import AppContextProvider from "./AppContext";
import Header from "./components/Header";
import Leftcolumn from "./components/Leftcolumn";
import Rightcolumn from "./components/Rightcolumn";

function App() {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(16);
  const [like, setLike] = useState(0);
  return (
    <div className="container-fluid g-0 main-container position-relative">
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="text-light p-1 ps-3">React Application</h1>
      </nav>
      <div className="container mt-4">
        <Header like={like} />
        <div className="row mt-4">
          <Leftcolumn
            size={size}
            setSize={setSize}
            color={color}
            setColor={setColor}
            setLike={setLike}
          />
          <Rightcolumn size={size} color={color} />
        </div>
      </div>
      <footer className="navbar navbar-dark bg-dark position-absolute bottom-0 w-100">
        <h1 className="text-light text-center p-1 w-100">React Application</h1>
      </footer>
    </div>
  );
}

export default App;
