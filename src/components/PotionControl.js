import React from "react";
import PotionList from "./PotionList";
import Regen from "../img/Regen.gif"; //Purple
import Indigo from "../img/Indigo.gif";

class PotionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creating: false,
      selectedPotion: null,
      updating: false,
      potionList: [
        {
          name: "Potion of Regeneration",
          price: 4,
          duration: "0:45",
          effect: "Restores 18 health over time",
          stock: 10,
          img: Regen,
          id: "0"
        },
        {
          name: "Potion of Night Vision",
          price: 6,
          duration: "3:00",
          effect: "Visually brightens everything to a light level of 15,",
          stock: 5,
          img: Indigo,
          id: "1"
        }
      ]
    }
  }

  render() {
    let currentlyVisibleState = <PotionList potionList={this.state.potionList} />
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}


export default PotionControl;