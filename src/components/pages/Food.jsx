import Navigation from "../Navigation";
import Contact from "../Contact";
import "../.././App.css";
import menuImage from "../../assets/images/menu-picture.png";

export default function Menu() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="first-column">
          <h1 className="pages-header">Menu</h1>
          <p className="pages-desc">
            At Aurum, every dish is a masterpiece crafted with precision,
            passion, and artistry. Our chefs combine the finest seasonal
            ingredients with innovative techniques to create a symphony of
            flavors that delight the senses. Each plate is more than a meal — it
            is a curated experience designed to evoke emotion, capture beauty,
            and celebrate the essence of haute cuisine.
          </p>
        </div>
        <div className="image-container">
          <img src={menuImage} alt="Restaurant menu" className="pages-image" />
        </div>
        <button className="pages-btn">
          <span>CHECK OUT OUR MENU</span>
        </button>
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
