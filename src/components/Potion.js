import React from "react";
import PropTypes from "prop-types";

function Potion(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPotionClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>{props.price}</p>
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