import { Route, Routes } from "react-router-dom";

import './App.css';
import Create from './components/Create';
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <h2>CRUD Application</h2>
        <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>

        <Route path="/update" element={<Update/>}/>

        </Routes>
      </header>
      
    </div>
  );
}

export default App;
