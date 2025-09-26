import "./Navigation.css";
import menuIcon from "../assets/images/icons/menu_book_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import homeIcon from "../assets/images/icons/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import instaIcon from "../assets/images/icons/icons8-instagram.svg";
import fbIcon from "../assets/images/icons/icons8-facebook.svg";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1 className="nav-header">AURUM</h1>
      <div className="nav-bar">
        <div className="nav-btns1">
          <button className="home-btn">
            <img src={homeIcon} alt="Home" className="home-icon" />
          </button>
          <button className="menu-btn">
            <img src={menuIcon} alt="Menu" className="menu-icon" />
            Menu
          </button>
        </div>
        <div className="nav-btns2">
          <button>BOOK A TABLE</button>
          <button>ORDER ONLINE</button>
        </div>
        <div className="nav-btns3">
          <button className="insta-btn">
            <img src={instaIcon} alt="Insta" />
          </button>
          <button className="fb-btn">
            <img src={fbIcon} alt="Fb" />
          </button>
        </div>
      </div>
    </div>
  );
}
