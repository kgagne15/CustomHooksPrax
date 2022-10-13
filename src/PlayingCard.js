import React, { useState } from "react";
import useFlipState from "./hooks/useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css"


function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setIsFacingUp] = useFlipState(true);
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;

