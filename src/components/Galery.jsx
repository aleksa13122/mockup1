import React from "react";
import "./Galery.css";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/images/food5.jpg";
import img2 from "../assets/images/drinks4.jpg";
import img3 from "../assets/images/restourant7.jpg";

export default function Galery() {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="galery">
      {/* FOOD */}
      <div className="galery-picture" data-aos="fade-right">
        <img src={img1} alt="food" />
      </div>
      <div className="galery-description" data-aos="fade-left">
        <h3 className="galery-heading">{t("gallery.food.title")}</h3>
        <p className="galery-text">{t("gallery.food.desc")}</p>
        <a href="/menu" className="galery-btn">
          <span>{t("gallery.food.btn")}</span>
        </a>
      </div>

      {/* DRINKS */}
      <div className="galery-description" data-aos="fade-right">
        <h3 className="galery-heading heading-drinks">
          {t("gallery.drinks.title")}
        </h3>
        <p className="galery-text text-drinks">{t("gallery.drinks.desc")}</p>
        <a href="/drinks" className="galery-btn btn-drinks">
          <span>{t("gallery.drinks.btn")}</span>
        </a>
      </div>
      <div className="galery-picture" data-aos="fade-left">
        <img src={img2} alt="drinks" className="drinks-img" />
      </div>

      {/* AMBIENCE */}
      <div className="galery-picture" data-aos="fade-right">
        <img src={img3} alt="ambience" />
      </div>
      <div className="galery-description" data-aos="fade-left">
        <h3 className="galery-heading">{t("gallery.ambience.title")}</h3>
        <p className="galery-text">{t("gallery.ambience.desc")}</p>
        <a href="/gallery" className="galery-btn">
          <span>{t("gallery.ambience.btn")}</span>
        </a>
      </div>
    </div>
  );
}
