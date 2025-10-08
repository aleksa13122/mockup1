import "./Events.css";
import food3 from "../assets/images/food3.jpg";
import food2 from "../assets/images/food2.jpg";
import food1 from "../assets/images/food1.jpg";

export default function Events() {
  return (
    <div className="events">
      <div className="event-card">
        <img src={food1} alt="Food" className="card-img" />
        <h3 className="card-title">Mediterranean Delight</h3>
      </div>
      <div className="event-card">
        <img src={food2} alt="Food" className="card-img" />
        <h3 className="card-title">Mediterranean Delight</h3>
      </div>
      <div className="event-card">
        <img src={food3} alt="Food" className="card-img" />
        <h3 className="card-title">Mediterranean Delight</h3>
      </div>
    </div>
  );
}
