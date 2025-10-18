import "./Navigation.css";
import ReactCountryFlag from "react-country-flag";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-btns">
        <a className="table-btn">MENU</a>
        <a className="order-btn">BAR</a>
        <a className="table-btn">GALLERY</a>
        <a className="table-btn">RESERVATIONS</a>
        <a href="#contact" className="order-btn">
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
