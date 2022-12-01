import "./App.css";
import { AppContextProvider } from "./AppContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Leftcolumn from "./components/Leftcolumn";
import Nav from "./components/Nav";
import Rightcolumn from "./components/Rightcolumn";

function App() {
  return (
    <AppContextProvider>
      <div className="container-fluid g-0 main-container position-relative">
        <Nav />
        <div className="container mt-4 pb-4">
          <Header />
          <div className="row mt-4">
            <Leftcolumn />
            <Rightcolumn />
          </div>
        </div>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
