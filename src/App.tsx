import React, { FC }from "react";
import "./styles.css";
import HAND from "./Hand.png";
import STARS from './stars.png'
import GOLD from './goldborder.png'
import POLISH from './polish.png'
import PNKDST from './pinkdust.png'

const App: React.FC = () => {
  return (
    <>
      <h1>Nail Design Studio</h1>

       <img src={HAND} alt="hand-model" className="handmodel" />
      <img src={STARS} alt="stars-background" className="stars" />
      <img src={GOLD} alt="gold-border" className="gold" width='700'/>
      <img src={GOLD} alt="gold-border" className="gold2" />
      <img src={GOLD} alt="gold-border" className="gold3" />
      <img src={GOLD} alt="gold-border" className="gold4" />
      <img src={POLISH} alt="nail-polish" className="polish" />
       <img src={PNKDST} alt="pink-dust" className="pinkdust" />
       <img src={PNKDST} alt="pink-dust" className="pinkdust2" /> 
      <img src={PNKDST} alt="pink-dust" className="pinkdust3" /> 
       <img src={PNKDST} alt="pink-dust" className="pinkdust4" /> 
      <button className="button">Start Designing</button>
    </>
  );
};

export default App;
