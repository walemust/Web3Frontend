import React from "react";
import Styles from "./Card.module.css";

const Card = ({ cardKey, cardValue }) => {
  return (
    <div className={Styles.root}>
      <span className={Styles.card_title}>{cardKey}</span>
      <span className={Styles.card_value}>
        {cardValue ? `${cardValue} BRT` : "-- : --"}
      </span>
    </div>
  );
};

export default Card;
