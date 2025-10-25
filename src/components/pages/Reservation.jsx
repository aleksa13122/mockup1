import { useState } from "react";
import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function Reservations() {
  // 1️⃣ STATE — čuvamo izabrani datum i minimalno vreme
  const [selectedDate, setSelectedDate] = useState("");
  const [minTime, setMinTime] = useState("09:00");

  // 2️⃣ FUNKCIJA — proverava koji je dan korisnik izabrao
  function handleDateChange(e) {
    const chosenDate = e.target.value;
    setSelectedDate(chosenDate);

    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];

    // Ako je danas — vreme mora biti sat unapred
    if (chosenDate === formattedToday) {
      const now = new Date();
      now.setHours(now.getHours() + 1); // dodaj 1h
      const nextHour = now.toISOString().slice(11, 16); // uzmi HH:MM
      setMinTime(nextHour);
    } else {
      // Ako nije danas — minimalno 09:00
      setMinTime("09:00");
    }
  }

  // 3️⃣ FUNKCIJA — validacija vremena (ako želiš dodatnu sigurnost)
  function handleTimeChange(e) {
    const [hours] = e.target.value.split(":").map(Number);
    const isValid = (hours >= 9 && hours <= 23) || (hours >= 0 && hours < 2);

    if (!isValid) {
      alert("We are closed at that time.");
      e.target.value = "";
    }
  }

  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="grid-container">
          {/* LEVA STRANA */}
          <div className="div-one">
            <h1 className="pages-header">Reservations</h1>
            <p className="pages-desc">
              Make your reservation easily by filling out the form on the right.
              We’ll confirm your booking as soon as possible.
            </p>
          </div>

          {/* DESNA STRANA */}
          <div className="div-two">
            <form
              action="https://script.google.com/macros/s/AKfycbwl74h_JLxJGeC7Ly7ZwfilisbbodWE4L2svMvkNbFOQFZJDzAJHEUlG8MSBFKC5l0HTw/exec"
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
                name="number_of_people"
                type="number"
                min="1"
                placeholder="Number of people"
                required
              />
              {/* Datum */}
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={handleDateChange}
                required
              />
              {/* Vreme */}
              <input
                key={minTime} // 👈 ovo je ključ koji “osvežava” input
                type="time"
                name="time"
                min={minTime}
                onChange={handleTimeChange}
                required
              />
              <input
                name="notes"
                placeholder="Leave us a note (optional)"
                type="text"
              />
              <button type="submit" href="/thankyou">
                RESERVE
              </button>
            </form>
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
