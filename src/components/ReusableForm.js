import React from "react";
import PropTypes from "prop-types";

import Indigo from "../img/Indigo.gif";
import Lavendar from "../img/Lavendar.gif";
import LightBlue from "../img/LightBlue.gif";
import Magenta from "../img/Magenta.gif";
import PaleGreen from "../img/PaleGreen.gif";
import Pink from "../img/Pink.gif";
import Purple from "../img/Purple.gif";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          required
          placeholder="Potion Name" />
        <br />
        <input
          type="number"
          name="price"
          required
          placeholder="Price" />
        <br />
        <input
          type="text"
          name="duration"
          required
          placeholder="Effect Duration" />
        <br />
        <textarea
          type="text"
          name="effect"
          required
          placeholder="Effect Description" />
        <br />
        <input
          type="number"
          name="stock"
          required
          placeholder="Stock" />
        <br />
        <select
          name="img"
          required
          placeholder="Potion Color">
          <option value={Indigo}>Indigo</option>
          <option value={Lavendar}>Lavendar</option>
          <option value={LightBlue}>Light Blue</option>
          <option value={Magenta}>Magenta</option>
          <option value={PaleGreen}>Pale Green</option>
          <option value={Pink}>Pink</option>
          <option value={Purple}>Purple</option>
        </select>
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;