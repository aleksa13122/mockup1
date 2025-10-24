import Navigation from "../Navigation";
import Contact from "../Contact";
import "../.././App.css";
import menuImage from "../../assets/images/menu-food.png";

export default function Menu() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="grid-container">
          <div className="div-one">
            <h1 className="pages-header">Menu</h1>
            <p className="pages-desc">
              At Aurum, every dish is a masterpiece crafted with precision,
              passion, and artistry. Our chefs combine the finest seasonal
              ingredients with innovative techniques to create a symphony of
              flavors that delight the senses.
            </p>
            <a href="/food-menu.pdf" download className="pages-btn">
              <span>DOWNLOAD FOOD MENU</span>
            </a>
          </div>
          <div className="div-two">
            <img
              src={menuImage}
              alt="Restaurant menu"
              className="pages-image"
            />
          </div>
        </div>
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
