import "./App.css";
import rest1 from "./assets/images/restourant1.jpg";

import Navigation from "./components/Navigation.jsx";
import Description from "./components/Description.jsx";
import Galery from "./components/Galery.jsx";
import Events from "./components/Events.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${rest1})` }}>
        <Navigation></Navigation>
      </div>
      <Description></Description>
      <Galery></Galery>
      <Events></Events>
      <div className="parallax">
        <button className="parallax-btn">
          {" "}
          <span>Book Now</span>
        </button>
      </div>
      <Contact></Contact>
    </>
  );
}

export default App;

console.log(rest1);
