import Navigation from "../Navigation";
import Contact from "../Contact";
import "../../App.css";
import menuImage from "../../assets/images/menu-food.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Menu() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="grid-container">
          <div className="div-one">
            <h1 className="pages-header">{t("menu.title")}</h1>
            <p className="pages-desc">{t("menu.desc")}</p>
            <a href="/food-menu.pdf" download className="pages-btn">
              <span>{t("menu.download")}</span>
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
          <span>{t("menu.bookNow")}</span>
        </a>
      </div>

      <Contact />
    </>
  );
}
