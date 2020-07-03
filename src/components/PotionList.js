import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
  return (
    <React.Fragment>
      {props.potionList.map((potion) =>
        <Potion
          name={potion.name}
          price={potion.price}
          duration={potion.duration}
          effect={potion.effect}
          stock={potion.stock}
          id={potion.id}
          key={potion.id} />
      )}
    </React.Fragment>
  )
}

PotionList.propTypes = {
  potionList: PropTypes.array
}

export default PotionList;