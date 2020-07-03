import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props) {
  const { potion } = props;
  return (
    <React.Fragment>
      <h3>{potion.name} Details</h3>
      <img src={potion.img} alt="Potion gif" />
      <p>Price: {potion.price} Gold Ingots</p>
      <p>Duration: {potion.duration}</p>
      <p>Effect: {potion.effect}</p>
      <p>Stock: {potion.stock}</p>
      <button onClick={props.onClickingUpdate}>Update Potion</button>
    </React.Fragment>
  )
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingUpdate: PropTypes.func
}

export default PotionDetail;