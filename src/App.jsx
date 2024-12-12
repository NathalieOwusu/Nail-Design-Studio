import * as React from "react";
import { useNavigate } from "react-router-dom";


import "./styles.scss";

// Imported images
import HAND from "./Hand.png";
import STARS from "./stars.png";
import POLISH from "./polish.png";
import PNKDST from "./pinkdust.png";

const App = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  // Function to handle button click
  const handleButtonClick = () => {
    console.log("Start Designing button clicked!");
    // Navigate to the /main route
    navigate("/main");
  };

  return (
    <div className="App">
     

      <div className="design-section">
        <button onClick={handleButtonClick} className="button">
          Start Designing
        </button>

        {/* Images */}
        <img src={HAND} alt="Hand model" className="handmodel" />
        <img src={STARS} alt="Stars background" className="stars" />
        <img src={POLISH} alt="Nail polish" className="polish" />
        <img src={PNKDST} alt="Pink dust" className="pinkdust" />
        <img src={PNKDST} alt="Pink dust 2" className="pinkdust2" />
        <img src={PNKDST} alt="Pink dust 3" className="pinkdust3" />
        <img src={PNKDST} alt="Pink dust 4" className="pinkdust4" />
      </div>
    </div>
  );
};

export default App;
