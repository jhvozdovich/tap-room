import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props) {
  const { potion, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let stockDisplay;
  if (potion.stock > 0) {
    stockDisplay = potion.stock;
  } else {
    stockDisplay = "Out of Stock!";
  }

  let lowStockDisplayWarning;
  if (potion.stock >= 10 || potion.stock === 0 || isNaN(potion.stock)) {
    lowStockDisplayWarning = null;
  } else {
    lowStockDisplayWarning = "Almost Out!";
  }

  let priceDisplay;
  if (isNaN(potion.price)) {
    priceDisplay = "Unknown";
  } else {
    priceDisplay = potion.price
  }

  let durationDisplay;
  if (potion.duration === "") {
    durationDisplay = "Unknown";
  } else {
    durationDisplay = potion.duration
  }

  let effectDisplay;
  if (potion.effect === "") {
    effectDisplay = "Unknown";
  } else {
    effectDisplay = potion.effect
  }
  return (
    <React.Fragment>
      <h3>{potion.name} Stats</h3>
      <img src={potion.img} alt="Potion gif" />
      <p>Price: {priceDisplay} Gold Ingots</p>
      <p>Duration: {durationDisplay}</p>
      <p>Effect: {effectDisplay}</p>
      <p>Stock: {stockDisplay} {lowStockDisplayWarning}</p>
      <button onClick={() => onClickingBuy(potion.id)}>Purchase Potion</button>
      <button onClick={() => onClickingRestock(potion.id)}>Restock Potion</button>
      <button onClick={props.onClickingUpdate}>Update Potion</button>
      <button onClick={() => onClickingDelete(potion.id)}>Delete Potion</button>
    </React.Fragment>
  )
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingUpdate: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default PotionDetail;