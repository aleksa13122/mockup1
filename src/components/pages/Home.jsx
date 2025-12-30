import React from "react";

import "../../App.css";
import rest1 from "../../assets/images/restourant1.jpg";
import Navigation from "../Navigation.jsx";
import Description from "../Description.jsx";
import Galery from "../Galery.jsx";
import Events from "../Events.jsx";
import Contact from "../Contact.jsx";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg" style={{ backgroundImage: `url(${rest1})` }}>
          <Navigation />
        </div>
        <Description />
        <Galery />
        <Events />
        <div className="parallax">
          <a href="/reservations" className="parallax-btn">
            <span>{t("home.bookNow")}</span>
          </a>
        </div>
        <Contact />
      </motion.div>
    </>
  );
}
