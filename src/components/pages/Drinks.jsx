import Navigation from "../Navigation";
import Contact from "../Contact";
import "../../App.css";
import drinksMenuImage from "../../assets/images/menu-drinks.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function Bar() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="main-container">
          <Navigation />
          <div className="grid-container">
            <div className="div-one">
              <h1 className="pages-header">{t("bar.title")}</h1>
              <p className="pages-desc">{t("bar.desc")}</p>
              <a href="/drinks-menu.pdf" download className="pages-btn">
                <span>{t("bar.download")}</span>
              </a>
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
            <span>{t("bar.bookNow")}</span>
          </a>
        </div>

        <Contact />
      </motion.div>
    </>
  );
}
