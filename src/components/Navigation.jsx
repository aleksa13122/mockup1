import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-bar">
        <div className="nav-btns1">
          <button>HOME</button>
          <button>MENU</button>
        </div>
        <div className="nav-btns2">
          <button>BOOK A TABLE</button>
          <button>ORDER ONLINE</button>
        </div>
        <div className="nav-btns3">
          <button>INSTA</button>
          <button>FB</button>
        </div>
      </div>
    </div>
  );
}
