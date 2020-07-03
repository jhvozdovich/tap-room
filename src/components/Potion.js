import React from "react";
import PropTypes from "prop-types";

function Potion(props) {
  let priceDisplay;
  if (isNaN(props.price)) {
    priceDisplay = "Unknown";
  } else {
    priceDisplay = props.price
  }
  return (
    <React.Fragment>
      <div className="potion" onClick={() => props.whenPotionClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>Price: {priceDisplay} Gold Ingots</p>
        <img src={props.img} alt="potion gif" />
      </div>
    </React.Fragment>
  )
}

Potion.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenPotionClicked: PropTypes.func
}

export default Potion;