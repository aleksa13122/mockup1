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
        {/* <h1>Reservations</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequuntur similique provident eum sunt dolore ullam nemo, incidunt
          atque, voluptas earum. Consequuntur delectus est debitis nisi laborum
          laboriosam dicta minima.
        </p> */}
        <form
          action="https://formsubmit.co/alexxclipss@gmail.com"
          method="POST"
        >
          <input name="full_name" required />
          <input name="email" required />
          <input name="party_size" type="number" min="1" required />
          <input name="time" type="time" min={minTime} required />
          <input
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <input name="notes" type="text" />
          <button type="submit">RESERVE</button>
        </form>
      </div>
      <div className="parallax"></div>
      <Contact />
    </>
  );
}
