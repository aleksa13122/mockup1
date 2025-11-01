import "./Navigation.css";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ReactCountryFlag from "react-country-flag";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="nav-bar">
        <h1 className="nav-header">AURUM</h1>

        {/* Desktop menu */}
        <div className="nav-btns desktop-only">
          <Link to="/" className="nav-link">
            {t("navigation.links.home")}
          </Link>
          <Link to="/menu" className="nav-link">
            {t("navigation.links.food")}
          </Link>
          <Link to="/drinks" className="nav-link">
            {t("navigation.links.bar")}
          </Link>
          <Link to="/gallery" className="nav-link">
            {t("navigation.links.gallery")}
          </Link>
          <Link to="/reservations" className="nav-link">
            {t("navigation.links.reservations")}
          </Link>
          <a href="#contact" className="nav-link">
            {t("navigation.links.contact")}
          </a>
        </div>

        <div className="language-btns desktop-only">
          <button className="flag-btn" onClick={() => changeLanguage("en")}>
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: 24, height: 24 }}
            />
          </button>
          <button className="flag-btn" onClick={() => changeLanguage("mt")}>
            <ReactCountryFlag
              countryCode="MT"
              svg
              style={{ width: 24, height: 24 }}
            />
          </button>
          <button className="flag-btn" onClick={() => changeLanguage("it")}>
            <ReactCountryFlag
              countryCode="IT"
              svg
              style={{ width: 24, height: 24 }}
            />
          </button>
          <button className="flag-btn" onClick={() => changeLanguage("de")}>
            <ReactCountryFlag
              countryCode="DE"
              svg
              style={{ width: 24, height: 24 }}
            />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="burger mobile-only" onClick={toggle}>
          ☰
        </button>
      </div>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-menu"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <button className="close-btn" onClick={toggle}>
                ✕
              </button>

              <div className="mobile-nav-links">
                <Link to="/" onClick={toggle}>
                  {t("navigation.links.home")}
                </Link>
                <Link to="/menu" onClick={toggle}>
                  {t("navigation.links.food")}
                </Link>
                <Link to="/drinks" onClick={toggle}>
                  {t("navigation.links.bar")}
                </Link>
                <Link to="/gallery" onClick={toggle}>
                  {t("navigation.links.gallery")}
                </Link>
                <Link to="/reservations" onClick={toggle}>
                  {t("navigation.links.reservations")}
                </Link>
                <a href="#contact" onClick={toggle}>
                  {t("navigation.links.contact")}
                </a>
              </div>

              <div className="mobile-lang">
                <button
                  className="flag-btn"
                  onClick={() => changeLanguage("en")}
                >
                  <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{ width: 18, height: 18 }}
                  />
                </button>
                <button
                  className="flag-btn"
                  onClick={() => changeLanguage("mt")}
                >
                  <ReactCountryFlag
                    countryCode="MT"
                    svg
                    style={{ width: 18, height: 18 }}
                  />
                </button>
                <button
                  className="flag-btn"
                  onClick={() => changeLanguage("it")}
                >
                  <ReactCountryFlag
                    countryCode="IT"
                    svg
                    style={{ width: 18, height: 18 }}
                  />
                </button>
                <button
                  className="flag-btn"
                  onClick={() => changeLanguage("de")}
                >
                  <ReactCountryFlag
                    countryCode="DE"
                    svg
                    style={{ width: 18, height: 18 }}
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
