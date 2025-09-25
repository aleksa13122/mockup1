import "./App.css";
import rest1 from "./assets/images/restourant1.jpg";
import serv1 from "./assets/images/service1.jpg";
import rest4 from "./assets/images/restourant4.jpg";

import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${rest1})` }}>
        <Navigation></Navigation>
      </div>
      <div className="bg" style={{ backgroundImage: `url(${serv1})` }}></div>
      <div className="bg" style={{ backgroundImage: `url(${rest4})` }}></div>
      <div className="bg" style={{ backgroundImage: `url(${rest4})` }}></div>
    </>
  );
}

export default App;

console.log(rest1);
