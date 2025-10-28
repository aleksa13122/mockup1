import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ThankYou() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="thanku-div">
          <h1 className="thanku-header">{t("thankyou.title")}</h1>
          <p className="thanku-desc">{t("thankyou.desc1")}</p>
          <p className="thanku-desc">
            {t("thankyou.desc2")} <strong>Aurum</strong>.
          </p>
        </div>
      </div>

      <div className="parallax">
        <a href="/reservations" className="parallax-btn">
          <span>{t("thankyou.bookNow")}</span>
        </a>
      </div>

      <Contact />
    </>
  );
}
