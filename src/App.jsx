import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Food";
import Bar from "./components/pages/Drinks";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food" element={<Bar />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
