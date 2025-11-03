import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Menu from "./components/pages/Food";
import Bar from "./components/pages/Drinks";
import Gallery from "./components/pages/Gallery";
import Reservation from "./components/pages/Reservation";
import ThankYou from "./components/pages/ThankYou";
import { AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/drinks" element={<Bar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
}

export default App;
