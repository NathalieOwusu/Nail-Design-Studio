import React from "react";
import ALMOND from "./almond.webp";
import BALLERINA from "./BALLERINA.webp";
import OVAL from "./OVAL.webp";
import SQUARE from "./SQUARE.webp";
import SQUOVAL from "./SQUOVAL.webp";
import STILETTO from "./STILETTO.webp";
import FLARE from "./FLARE.webp";
import LIPSTICK from "./LIPSTICK.webp";
// Import Nail Polish Images
import polish1 from './Nail Polishes set/1.png';
import polish2 from './Nail Polishes set/2.png';
import polish3 from './Nail Polishes set/3.png';
import polish4 from './Nail Polishes set/4.png';
import polish5 from './Nail Polishes set/5.png';
import polish6 from './Nail Polishes set/6.png';
import polish7 from './Nail Polishes set/7.png';
import polish8 from './Nail Polishes set/8.png';
import polish9 from './Nail Polishes set/9.png';
import polish10 from './Nail Polishes set/10.png';
import polish11 from './Nail Polishes set/11.png';
import polish12 from './Nail Polishes set/12.png';


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
)
   const NailColor = ({ src, alt, className, onClick }) => (
    <img
    src={src}
    alt={alt}
    className={className}
    onClick={onClick}
    style={{ cursor: "pointer"}}
    />
)

const Main = () => {
  // Handler for when any nail shape is clicked
  const handleNailShapeClick = (shapeName) => {
    alert(`${shapeName} nail shape clicked!`);
  };
  const handleNailColorClick = (colorName) => {
    alert(`${colorName} gel polish clicked!`);
  }

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
      <NailColor
        src={polish1}
        alt="Polish 1"
        className="polish1"
        onClick={() => handleNailColorClick("Georgia Peach")}
      />
      <NailColor
        src={polish2}
        alt="Polish 2"
        className="polish2"
        onClick={() => handleNailColorClick("Clementine")}
      />

      <NailColor
        src={polish3}
        alt="Polish 3"
        className="polish3"
        onClick={() => handleNailColorClick("Sunshine")}
      />

      <NailColor
        src={polish4}
        alt="Polish 4"
        className="polish4"
        onClick={() => handleNailColorClick("Seafoam Green")}
      />

      <NailColor
        src={polish5}
        alt="Polish 5"
        className="polish5"
        onClick={() => handleNailColorClick("Mystic Mermaid")}
      />
      <NailColor
        src={polish6}
        alt="Polish 6"
        className="polish6"
        onClick={() => handleNailColorClick("Blue Lagoon")}
      />
      <NailColor
        src={polish7}
        alt="Polish 7"
        className="polish7"
        onClick={() => handleNailColorClick("Purple Haze")}
      />
      <NailColor
        src={polish8}
        alt="Polish 8"
        className="polish8"
        onClick={() => handleNailColorClick("vibranium")}
      />
      <NailColor
        src={polish9}
        alt="Polish 9"
        className="polish9"
        onClick={() => handleNailColorClick("raspberry sorbet")}
      />
      <NailColor
        src={polish10}
        alt="Polish 10"
        className="polish10"
        onClick={() => handleNailColorClick("Hot Cherry")}
      />
      <NailColor
        src={polish11}
        alt="Polish 11"
        className="polish11"
        onClick={() => handleNailColorClick("Pink Champagne")}
      />
      <NailColor
        src={polish12}
        alt="Polish 12"
        className="polish12"
        onClick={() => handleNailColorClick("Coral Kiss")}
      />
    </div>
  );
};
      

export default Main;
