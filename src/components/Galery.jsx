import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Galery.css";
import img1 from "../assets/images/food5.jpg";
import img2 from "../assets/images/drinks4.jpg";
import img3 from "../assets/images/restourant7.jpg";

export default function Galery() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true }); // animacije traju 1s i pokreću se samo jednom
  }, []);

  return (
    <div className="galery">
      {/* FOOD */}
      <div className="galery-picture" data-aos="fade-right">
        <img src={img1} alt="food" />
      </div>
      <div className="galery-description" data-aos="fade-left">
        <h3 className="galery-heading">FOOD</h3>
        <p className="galery-text">
          At Aurum, every dish is a masterpiece. Our chefs combine seasonal
          ingredients with refined techniques to create a menu that celebrates
          Mediterranean heritage with a contemporary twist. Each plate is
          designed not only to satisfy, but to surprise and delight.
        </p>
        <button className="galery-btn">
          <span>MENU</span>
        </button>
      </div>

      {/* DRINKS */}
      <div className="galery-description" data-aos="fade-right">
        <h3 className="galery-heading heading-drinks">DRINKS</h3>
        <p className="galery-text text-drinks">
          Our curated wine list and crafted cocktails perfectly complement the
          dining experience. From rare vintages to signature mixes, every sip is
          chosen to elevate the flavors of your meal and indulge your senses in
          elegance.
        </p>
        <button className="galery-btn btn-drinks">
          <span>DRINKS</span>
        </button>
      </div>
      <div className="galery-picture" data-aos="fade-left">
        <img src={img2} alt="drinks" className="drinks-img" />
      </div>

      {/* AMBIENCE */}
      <div className="galery-picture" data-aos="fade-right">
        <img src={img3} alt="food" />
      </div>
      <div className="galery-description" data-aos="fade-left">
        <h3 className="galery-heading">AMBIENCE</h3>
        <p className="galery-text">
          Step into an atmosphere of timeless luxury. With sophisticated design,
          warm lighting, and a view that captures the spirit of Malta, Aurum is
          more than a restaurant — it’s an escape into refinement and comfort.
        </p>
        <button className="galery-btn">
          <span>GALLERY</span>
        </button>
      </div>
    </div>
  );
}
