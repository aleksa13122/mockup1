import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function Reservations() {
  const { t } = useContext(LanguageContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [minTime, setMinTime] = useState("09:00");

  function handleDateChange(e) {
    const chosenDate = e.target.value;
    setSelectedDate(chosenDate);

    const today = new Date().toISOString().split("T")[0];
    if (chosenDate === today) {
      const now = new Date();
      now.setHours(now.getHours() + 1);
      setMinTime(now.toISOString().slice(11, 16));
    } else setMinTime("09:00");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwl74h_JLxJGeC7Ly7ZwfilisbbodWE4L2svMvkNbFOQFZJDzAJHEUlG8MSBFKC5l0HTw/exec",
      { method: "POST", body: formData }
    );

    const text = await response.text();

    if (text.includes("Sorry")) {
      alert(t("reservations.form.alertFull"));
    } else {
      // ✅ Correct redirect (works local & deployed)
      window.location.href = `${window.location.origin}/thankyou`;
    }
  }

  function handleTimeChange(e) {
    const [hours] = e.target.value.split(":").map(Number);
    const valid = (hours >= 9 && hours <= 23) || (hours >= 0 && hours < 2);
    if (!valid) {
      alert(t("reservations.form.alertClosed"));
      e.target.value = "";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Navigation />

      <div className="main-container">
        <div className="grid-container">
          <div className="div-one">
            <h1 className="pages-header">{t("reservations.title")}</h1>
            <p className="pages-desc">{t("reservations.desc")}</p>
          </div>

          <div className="div-two">
            <form method="POST" onSubmit={handleSubmit}>
              <input
                name="full_name"
                placeholder={t("reservations.form.name")}
                required
              />
              <input
                name="email"
                placeholder={t("reservations.form.email")}
                required
              />
              <input
                name="number_of_people"
                type="number"
                min="1"
                placeholder={t("reservations.form.people")}
                required
              />
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={handleDateChange}
                required
              />
              <input
                key={minTime}
                type="time"
                name="time"
                min={minTime}
                onChange={handleTimeChange}
                required
              />
              <input
                name="notes"
                placeholder={t("reservations.form.notes")}
                type="text"
              />
              <button type="submit">{t("reservations.form.reserve")}</button>
            </form>
          </div>
        </div>
      </div>

      <div className="parallax">
        <Link to="/reservations" className="parallax-btn">
          <span>{t("reservations.bookNow")}</span>
        </Link>
      </div>

      <Contact />
    </motion.div>
  );
}
