import Navigation from "../Navigation";
import Contact from "../Contact";
import "../.././App.css";

export default function Menu() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <h1>Our Menu</h1>
        <p>Explore Aurum’s refined culinary creations.</p>
      </div>
      <Contact />
    </>
  );
}
