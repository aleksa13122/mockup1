import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function Gallery() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <h1>Gallery</h1>
        <p>A visual journey through elegance and taste.</p>
      </div>
      <div className="parallax">
        <a href="/reservations" className="parallax-btn">
          <span>Book Now</span>
        </a>
      </div>
      <Contact />
    </>
  );
}
