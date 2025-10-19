import "./Navigation.css";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-btns">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/menu" className="nav-link">
          FOOD
        </Link>
        <Link to="/drinks" className="nav-link">
          BAR
        </Link>
        <Link to="/gallery" className="nav-link">
          GALLERY
        </Link>
        <Link to="/reservations" className="nav-link">
          RESERVATIONS
        </Link>
        <a href="#contact" className="nav-link">
          CONTACT
        </a>
      </div>
      <div className="language-btns">
        <button className="flag-btn">
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn">
          <ReactCountryFlag
            countryCode="MT"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn">
          <ReactCountryFlag
            countryCode="IT"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn">
          <ReactCountryFlag
            countryCode="DE"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </div>
    </div>
  );
}
