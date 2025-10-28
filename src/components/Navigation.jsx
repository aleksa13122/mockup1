import "./Navigation.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ReactCountryFlag from "react-country-flag";

export default function Navigation() {
  const { t, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>

      <div className="nav-btns">
        <a href="/" className="nav-link">
          {t("navigation.links.home")}
        </a>
        <a href="/menu" className="nav-link">
          {t("navigation.links.food")}
        </a>
        <a href="/drinks" className="nav-link">
          {t("navigation.links.bar")}
        </a>
        <a href="/gallery" className="nav-link">
          {t("navigation.links.gallery")}
        </a>
        <a href="/reservations" className="nav-link">
          {t("navigation.links.reservations")}
        </a>
        <a href="#contact" className="nav-link">
          {t("navigation.links.contact")}
        </a>
      </div>

      <div className="language-btns">
        <button className="flag-btn" onClick={() => changeLanguage("en")}>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn" onClick={() => changeLanguage("mt")}>
          <ReactCountryFlag
            countryCode="MT"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn" onClick={() => changeLanguage("it")}>
          <ReactCountryFlag
            countryCode="IT"
            svg
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <button className="flag-btn" onClick={() => changeLanguage("de")}>
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
