import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {props.cards.map((card, i) => (
        <Card card={card} key={i + Date.now()} />
        ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};