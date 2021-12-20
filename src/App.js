import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Publisher from "./components/Publisher";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publisher/:id" element = {<Publisher />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
