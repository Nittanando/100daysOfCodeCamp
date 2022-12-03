import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div
      className="container-fluid p-2 bg-light g-0"
      style={{ minHeight: "100vh" }}
    >
      <Nav />

      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
