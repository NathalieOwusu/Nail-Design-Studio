import React from "react";
import ALMOND from "./almond.webp";
import BALLERINA from "./BALLERINA.webp";
import OVAL from "./OVAL.webp";
import SQUARE from "./SQUARE.webp";
import SQUOVAL from "./SQUOVAL.webp";
import STILETTO from "./STILETTO.webp";
import FLARE from "./FLARE.webp";
import LIPSTICK from "./LIPSTICK.webp";

// Imported images
import HAND2 from "./Hand2.png";


// Reusable Component for Nail Shapes
const NailShape = ({ src, alt, className, onClick }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    width="150"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  />
);

const Main = () => {
  // Handler for when any nail shape is clicked
  const handleNailShapeClick = (shapeName) => {
    alert(`${shapeName} nail shape clicked!`);
  };

  return (
    <div className="main-page">
      <div className="ChooseShape">
        <h1>Select Nail Shape:</h1>
      </div>
      <div className="Geltitle">
        <h1>Gel Polish:</h1>
      </div>
      <div className="square">
        <div className="square2"></div>
      </div>

      {/* Hand Model */}
      <img src={HAND2} alt="Hand model" className="handmodel2" />

      {/* Nail Shape Images */}
      <NailShape
        src={ALMOND}
        alt="Almond Nail Shape"
        className="almond"
        onClick={() => handleNailShapeClick("Almond")}
      />
      <NailShape
        src={BALLERINA}
        alt="Ballerina Nail Shape"
        className="ballerina"
        onClick={() => handleNailShapeClick("Ballerina")}
      />
      <NailShape
        src={OVAL}
        alt="Oval Nail Shape"
        className="oval"
        onClick={() => handleNailShapeClick("Oval")}
      />
      <NailShape
        src={SQUARE}
        alt="Square Nail Shape"
        className="squarenail"
        onClick={() => handleNailShapeClick("Square")}
      />
      <NailShape
        src={SQUOVAL}
        alt="Squoval Nail Shape"
        className="squoval"
        onClick={() => handleNailShapeClick("Squoval")}
      />
      <NailShape
        src={STILETTO}
        alt="Stiletto Nail Shape"
        className="stiletto"
        onClick={() => handleNailShapeClick("Stiletto")}
      />
      <NailShape
        src={FLARE}
        alt="Flare Nail Shape"
        className="flare"
        onClick={() => handleNailShapeClick("Flare")}
      />
      <NailShape
        src={LIPSTICK}
        alt="Lipstick Nail Shape"
        className="lipstick"
        onClick={() => handleNailShapeClick("Lipstick")}
      />
    </div>
  );
};

export default Main;
