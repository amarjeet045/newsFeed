import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Publisher from "./components/Publisher";
import Search from "./components/Search";
import ResultData from "./context/ResultApiContext";


function App() {
  return (
   <ResultData>
    <div className="App">
      <Search />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publisher/:id" element = {<Publisher />} />
        </Routes>
      </Router>
    </div>
    </ResultData>
  );
}

export default App;
