import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function ThankYou() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <h1>Thank You</h1>
        <p>
          Your reservation request has been successfully submitted.
          <br />
          We look forward to welcoming you at <strong>Aurum</strong>.
        </p>
      </div>
      <div className="parallax" />
      <Contact />
    </>
  );
}
