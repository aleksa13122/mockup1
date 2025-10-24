import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function ThankYou() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="thanku-div">
          <h1 className="thanku-header">Thank You!</h1>
          <p className="thanku-desc">
            Your reservation request has been successfully submitted.
          </p>
          <p className="thanku-desc">
            We look forward to welcoming you at <strong>Aurum</strong>.
          </p>
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
