import React from "react";
import PropTypes from "prop-types";

function Potion(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.price}</p>
      <img src={props.img} alt="potion gif" />
    </React.Fragment>
  )
}

Potion.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default Potion;