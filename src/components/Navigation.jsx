import "./Navigation.css";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-btns">
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/menu" className="nav-link">
          FOOD
        </a>
        <a href="/drinks" className="nav-link">
          BAR
        </a>
        <a href="/gallery" className="nav-link">
          GALLERY
        </a>
        <a href="/reservations" className="nav-link">
          RESERVATIONS
        </a>
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
