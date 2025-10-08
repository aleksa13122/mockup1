import "./Events.css";
import img3 from "../assets/images/drinks1.jpg";
import img2 from "../assets/images/food1.jpg";
import img1 from "../assets/images/food4.jpg";

export default function Events() {
  return (
    <div className="events">
      <a className="event-card">
        <img src={img1} alt="Food" className="card-img" />
        <h3 className="card-title">BRUNCH</h3>
      </a>
      <a className="event-card">
        <img src={img2} alt="Food" className="card-img" />
        <h3 className="card-title">MEDITERANIAN DELIGHT</h3>
      </a>
      <a className="event-card">
        <img src={img3} alt="Food" className="card-img" />
        <h3 className="card-title">FRESH JUICES</h3>
      </a>
    </div>
  );
}
