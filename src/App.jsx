import "./App.css";
import rest1 from "./assets/images/restourant1.jpg";

import Navigation from "./components/Navigation.jsx";
import Description from "./components/Description.jsx";
import Galery from "./components/Galery.jsx";

function App() {
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${rest1})` }}>
        <Navigation></Navigation>
      </div>
      <Description></Description>
      <Galery></Galery>
    </>
  );
}

export default App;

console.log(rest1);
