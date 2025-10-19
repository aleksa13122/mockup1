import Navigation from "../Navigation";
import Contact from "../Contact";
import "../.././App.css";

export default function Menu() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <h1>Our Menu</h1>
        <p>Explore Aurum’s refined culinary creations.</p>
      </div>
      <div className="parallax">
        <button className="parallax-btn">
          <span>Book Now</span>
        </button>
      </div>
      <Contact />
    </>
  );
}
