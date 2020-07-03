import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
  return (
    <React.Fragment>
      <h4>Click a potion for more information</h4>
      {props.potionList.map((potion) =>
        <Potion
          whenPotionClicked={props.onPotionSelection}
          name={potion.name}
          price={potion.price}
          duration={potion.duration}
          effect={potion.effect}
          stock={potion.stock}
          img={potion.img}
          id={potion.id}
          key={potion.id} />
      )}
    </React.Fragment>
  )
}

PotionList.propTypes = {
  potionList: PropTypes.array,
  onPotionSelection: PropTypes.func
}

export default PotionList;