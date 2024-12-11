import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./main"
import "./styles.css";

//imported images
import HAND from "./Hand.png";
import STARS from './stars.png'
import POLISH from './polish.png'
import PNKDST from './pinkdust.png'


const App = () => {
  
  const handleButtonClick = () => {
    window.open('/main', "_self"); 
}
return (
  <>
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>

    <button onClick={handleButtonClick} className="button">
      Start Designing
    </button>

    <img src={HAND} alt="hand-model" className="handmodel" />
    <img src={STARS} alt="stars-background" className="stars" />
    <img src={POLISH} alt="nail-polish" className="polish" />
    <img src={PNKDST} alt="pink-dust" className="pinkdust" />
    <img src={PNKDST} alt="pink-dust" className="pinkdust2" />
    <img src={PNKDST} alt="pink-dust" className="pinkdust3" />
    <img src={PNKDST} alt="pink-dust" className="pinkdust4" />
  </>
);
};

export default App;
