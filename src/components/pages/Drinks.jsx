import "./Pages.css";
import Contact from "../Contact";
import "../.././App.css";
import Navigation from "../Navigation";

export default function Drinks() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="navigacija"></div>
        <div className="pages-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vero
          illo, mollitia culpa sequi excepturi nam, repellat nobis reprehenderit
          recusandae aliquam est totam tenetur impedit. Dolore iusto corporis
          laboriosam quis.
          <a className="pages-pdf">download menu</a>
        </div>
        <div className="pages-galery">
          <div>IMAGE</div>
          <div>IMAGE</div>
          <div>IMAGE</div>
          <div>IMAGE</div>
          <div>IMAGE</div>
        </div>
      </div>

      <div className="parallax">
        <button className="parallax-btn">
          <span>Book Now</span>
        </button>
      </div>
      <Contact />
    </>
  );
}
