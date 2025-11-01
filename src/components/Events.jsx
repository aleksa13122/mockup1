import "./Events.css";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import img1 from "../assets/images/food4.jpg";
import img2 from "../assets/images/food1.jpg";
import img3 from "../assets/images/drinks1.jpg";

export default function Events() {
  const { t } = useContext(LanguageContext);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    if (selectedEvent) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent]);

  const events = [
    {
      title: t("events.brunch.title"),
      img: img1,
      desc: t("events.brunch.desc"),
    },
    {
      title: t("events.mediterranean.title"),
      img: img2,
      desc: t("events.mediterranean.desc"),
    },
    {
      title: t("events.juices.title"),
      img: img3,
      desc: t("events.juices.desc"),
    },
  ];

  return (
    <div className="events">
      {events.map((event, i) => (
        <a
          key={i}
          className="event-card"
          onClick={() => setSelectedEvent(event)}
        >
          <img src={event.img} alt={event.title} className="card-img" />
          <h3 className="card-title">{event.title}</h3>
        </a>
      ))}

      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.desc}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
