import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery5.jpg";
import img6 from "../../assets/images/galleryy6.jpg";

export default function Gallery() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="grid-container">
          {/* Leva strana — naslov i tekst */}
          <div className="div-one">
            <h1 className="pages-header">Gallery</h1>
            <p className="pages-desc">
              A visual journey through elegance and taste. Explore moments of
              culinary artistry and ambiance captured at Aurum.
            </p>
          </div>

          {/* Desna strana — display grid */}
          <div className="div-two gallery-grid">
            <img src={img1} alt="Aurum Gallery 1" />
            <img src={img2} alt="Aurum Gallery 2" />
            <img src={img3} alt="Aurum Gallery 3" />
            <img src={img4} alt="Aurum Gallery 4" />
            <img src={img5} alt="Aurum Gallery 5" />
            <img src={img6} alt="Aurum Gallery 6" />
          </div>
        </div>
      </div>
      <div className="parallax">
        <a href="/reservations" className="parallax-btn">
          <span>Book Now</span>
        </a>
      </div>
      <Contact />
    </>
  );
}
