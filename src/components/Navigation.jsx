import "./Navigation.css";
import ReactCountryFlag from "react-country-flag";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-btns">
        <button className="table-btn">FOOD</button>
        <button className="order-btn">DRINKS</button>
        <button className="table-btn">BOOK A TABLE</button>
        <button className="table-btn">ORDER ONLINE</button>
        <button className="order-btn">CONTACT</button>
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
