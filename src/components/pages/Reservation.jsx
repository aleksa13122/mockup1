import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function Gallery() {
  const now = new Date();
  now.setHours(now.getHours() + 1); // dodaje 1h
  const minTime = now.toISOString().slice(11, 16); // uzima samo HH:MM deo
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="grid-container">
          <div className="div-one">
            <h1 className="pages-header">Reservations</h1>
            <p className="pages-desc">
              Make your reservation easily by filling out the form on the right.
              We’ll confirm your booking as soon as possible.
            </p>
          </div>
          <div className="div-two">
            <form
              action="https://formsubmit.co/alexxclipss@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thankyou"
              />
              <input name="full_name" placeholder="Name" required />
              <input name="email" placeholder="Email" required />
              <input
                name="party_size"
                type="number"
                min="1"
                placeholder="Number of people"
                required
              />
              <input
                name="time"
                type="time"
                min={minTime}
                placeholder="Desired Time"
                required
              />
              <div className="input-wrapper">
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Select a date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <input
                name="notes"
                placeholder="Leave us a note (optional)"
                type="text"
              />
              <button type="submit">RESERVE</button>
            </form>
          </div>
        </div>
      </div>
      <div className="parallax"></div>
      <Contact />
    </>
  );
}
