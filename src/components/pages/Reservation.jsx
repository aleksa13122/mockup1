import Navigation from "../Navigation";
import Contact from "../Contact";
import "../pages/Pages.css";

export default function Gallery() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <h1>Reservations</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequuntur similique provident eum sunt dolore ullam nemo, incidunt
          atque, voluptas earum. Consequuntur delectus est debitis nisi laborum
          laboriosam dicta minima.
        </p>
      </div>
      <div className="parallax"></div>
      <Contact />
    </>
  );
}
