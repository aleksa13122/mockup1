// src/pages/Home.jsx
import "../../App.css";
import rest1 from "../../assets/images/restourant1.jpg";
import Navigation from "../Navigation.jsx";
import Description from "../Description.jsx";
import Galery from "../Galery.jsx";
import Events from "../Events.jsx";
import Contact from "../Contact.jsx";

export default function Home() {
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${rest1})` }}>
        <Navigation />
      </div>
      <Description />
      <Galery />
      <Events />
      <div className="parallax">
        <a href="/reservations" className="parallax-btn">
          <span>Book Now</span>
        </a>
      </div>
      <Contact />
    </>
  );
}
