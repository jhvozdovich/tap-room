import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props) {
  const { potion, onClickingDelete, onClickingBuy } = props;
  let stockDisplay;
  if (potion.stock > 0) {
    stockDisplay = potion.stock
  } else {
    stockDisplay = "Out of Stock!"
  }
  return (
    <React.Fragment>
      <h3>{potion.name} Details</h3>
      <img src={potion.img} alt="Potion gif" />
      <p>Price: {potion.price} Gold Ingots</p>
      <p>Duration: {potion.duration}</p>
      <p>Effect: {potion.effect}</p>
      <p>Stock: {stockDisplay}</p>
      <button onClick={() => onClickingBuy(potion.id)}>Purchase Item</button>
      <button onClick={props.onClickingUpdate}>Update Potion</button>
      <button onClick={() => onClickingDelete(potion.id)}>Delete Potion</button>
    </React.Fragment>
  )
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingUpdate: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default PotionDetail;