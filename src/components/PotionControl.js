import React from "react";
import PotionList from "./PotionList";
import NewPotionForm from "./NewPotionForm";

import Indigo from "../img/Indigo.gif";
import Purple from "../img/Purple.gif";


class PotionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatingFormVisible: false,
      selectedPotionVisible: null,
      updatingFormVisible: false,
      potionList: [
        {
          name: "Potion of Regeneration",
          price: 4,
          duration: "0:45",
          effect: "Restores 18 health over time",
          stock: 10,
          img: Purple,
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

  handleCreatingFormVisible = () => {
    this.setState(prevState => ({
      creatingFormVisible: !prevState.creatingFormVisible
    }));
  }

  handleAddingNewPotion = (newPotion) => {
    const newPotionList = this.state.potionList.concat(newPotion);
    this.setState({
      potionList: newPotionList,
      creatingFormVisible: false
    })
  }

  render() {
    let currentlyVisibleState = null;
    let navButton = null
    if (this.state.creatingFormVisible) {
      currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotion} />
      navButton = <button onClick={this.handleCreatingFormVisible}>Back to List</button>
    } else {
      currentlyVisibleState = <PotionList potionList={this.state.potionList} />
      navButton = <button onClick={this.handleCreatingFormVisible}>Add Potion</button>
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        {navButton}
      </React.Fragment>
    )
  }
}


export default PotionControl;