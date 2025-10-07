import "./Galery.css";
import img1 from "../assets/images/food5.jpg";
import img2 from "../assets/images/drinks4.jpg";
import img3 from "../assets/images/restourant7.jpg";
import img4 from "../assets/images/backgroundmarble1.jpg";

export default function Galery() {
  return (
    <div className="galery">
      <div className="galery-picture">
        <img src={img1} alt="food" />
      </div>
      <div className="galery-description">
        <h3 className="galery-heading">FOOD</h3>
        <p className="galery-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          labore a dolor consequuntur veritatis ullam veniam quibusdam cum
          aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem labore a dolor consequuntur veritatis ullam veniam
          quibusdam cum aspernatur
        </p>
        <button className="galery-btn">SEE MORE</button>
      </div>
      <div className="galery-description">
        <h3>DRINKS</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        labore a dolor consequuntur veritatis ullam veniam quibusdam cum
        aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem labore a dolor consequuntur veritatis ullam veniam quibusdam
        cum aspernatur
        <button>SEE MORE</button>
      </div>
      <div className="galery-picture">
        <img src={img2} alt="drinks" className="drinks-img" />
      </div>
      <div className="galery-picture">
        <img src={img3} alt="food" />
      </div>
      <div className="galery-description">
        <h3 className="galery-heading">AMBIENT</h3>
        <p className="galery-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          labore a dolor consequuntur veritatis ullam veniam quibusdam cum
          aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem labore a dolor consequuntur veritatis ullam veniam
          quibusdam cum aspernatur
        </p>
        <button className="galery-btn">SEE MORE</button>
      </div>
    </div>
  );
}
