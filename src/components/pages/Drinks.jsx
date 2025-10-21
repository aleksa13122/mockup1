import Navigation from "../Navigation";
import Contact from "../Contact";
import "../.././App.css";
import drinksMenuImage from "../../assets/images/menu-drinks.png";

export default function Menu() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="grid-container">
          <div className="div-one">
            <h1 className="pages-header">Bar</h1>
            <p className="pages-desc">
              The Aurum Bar is where flavor meets artistry in liquid form. Here,
              every glass tells a story — from smooth, aged spirits to vibrant,
              modern cocktails. Our mixologists blend precision with creativity,
              turning each drink into an experience that awakens the senses and
              elevates the moment.
            </p>
            <button className="pages-btn">
              <span>DOWNLOAD DRINKS MENU</span>
            </button>
          </div>
          <div className="div-two">
            <img
              src={drinksMenuImage}
              alt="Restaurant menu"
              className="pages-image pages-image-drinks"
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
