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
import img7 from "../../assets/images/gallery7.jpg";

export default function Gallery() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="grid-container-vertical">
          {/* Leva strana — naslov i tekst */}
          <div className="div-one">
            <h1 className="pages-header">Gallery</h1>
            <p className="pages-desc">
              A visual journey through elegance and taste. Explore moments of
              culinary artistry and ambiance captured at Aurum.
            </p>
            <a href="/reservations" className="pages-btn">
              <span>Book Now</span>
            </a>
          </div>

          {/* Desna strana — vertikalni carousel */}
          <div className="div-two-vertical">
            <Swiper
              direction="vertical" // 🔹 rotiramo carousel vertikalno
              modules={[SwiperNavigation]}
              navigation
              spaceBetween={20}
              slidesPerView={3} // 3 slike odjednom
              centeredSlides={true}
              loop={true}
              className="vertical-swiper"
            >
              <SwiperSlide>
                <img src={img1} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="Image 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="Image 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="Image 5" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="Image 6" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="Image 7" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
