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

    
    






      <div className="polish1">
        <img src={polish1} alt="Polish 1" width="300" />
      </div>
      
       <div className="polish2">
        <img src={polish2} alt="Polish 2" width="300" />
      </div>
      <div className="polish3">
        <img src={polish3} alt="Polish 3" width="320" />
      </div>
      <div className="polish4">
        <img src={polish4} alt="Polish 4" width="300" />
      </div>
      <div className="polish5">
        <img src={polish5} alt="Polish 5" width="350" />
      </div>
      <div className="polish6">
        <img src={polish6} alt="Polish 6" width="310" />
      </div>
      <div className="polish7">
        <img src={polish7} alt="Polish 7" width="325" />
      </div>
      <div className="polish8">
        <img src={polish8} alt="Polish 8" width="330" />
      </div>
      <div className="polish9">
        <img src={polish9} alt="Polish 9" width="325" />
      </div>
      <div className="polish10">
        <img src={polish10} alt="Polish 10" width="372" />
      </div>
      <div className="polish11">
        <img src={polish11} alt="Polish 11" width="345" />
      </div>
      <div className="polish12">
        <img src={polish12} alt="Polish 12" width="320" />
      </div> 
    </div>
  );
};
      

export default Main;
