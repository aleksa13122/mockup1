import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-btns">
        <button className="table-btn">FOOD</button>
        <button className="order-btn">DRINKS</button>
        <button className="table-btn">BOOK A TABLE</button>
        <button className="table-btn">BOOK A TABLE</button>
        <button className="order-btn">CONTACT</button>
      </div>
      <div className="language-btns">
        <button>US</button>
        <button>EU</button>
        <button>MT</button>
        <button>GER</button>
      </div>
    </div>
  );
}
