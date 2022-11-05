import React from "react";
import {useFlipState} from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css"


function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flip] = useFlipState();
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}



export default PlayingCard;

