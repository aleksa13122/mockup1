import { useState, useEffect } from "react";
import "./Events.css";
import img3 from "../assets/images/drinks1.jpg";
import img2 from "../assets/images/food1.jpg";
import img1 from "../assets/images/food4.jpg";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  const events = [
    {
      title: "BRUNCH",
      img: img1,
      desc: "Enjoy a refined brunch experience — light Mediterranean bites, fresh pastries, and seasonal flavors served with elegance.",
    },
    {
      title: "MEDITERRANEAN DELIGHT",
      img: img2,
      desc: "A culinary journey through the Mediterranean — a perfect balance of freshness, texture, and sophistication.",
    },
    {
      title: "FRESH JUICES",
      img: img3,
      desc: "Sip on freshness with our selection of cold-pressed juices made from locally sourced fruits and herbs.",
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

      {/* Popup (modal) */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // da ne zatvori ako klikneš unutra
          >
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.desc}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
