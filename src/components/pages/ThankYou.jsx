import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function ThankYou() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Navigation />

        <div className="main-container">
          <div className="thanku-div">
            <h1 className="thanku-header">{t("thankyou.title")}</h1>
            <p
              className="thanku-desc"
              dangerouslySetInnerHTML={{ __html: t("thankyou.desc1") }}
            ></p>
            <p
              className="thanku-desc"
              dangerouslySetInnerHTML={{ __html: t("thankyou.desc2") }}
            ></p>
          </div>
        </div>

        <div className="parallax">
          <a href="/reservations" className="parallax-btn">
            <span>{t("thankyou.bookNow")}</span>
          </a>
        </div>

        <Contact />
      </motion.div>
    </>
  );
}
