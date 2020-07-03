import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewPotionForm(props) {
  function handleNewPotionForm(event) {
    event.preventDefault();
    props.onNewPotionCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      duration: event.target.duration.value,
      effect: event.target.effect.value,
      stock: event.target.stock.value,
      img: event.target.img.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPotionForm}
        buttonText="Add Potion" />
    </React.Fragment>
  )
}

NewPotionForm.propTypes = {
  onNewPotionCreation: PropTypes.func
}

export default NewPotionForm;