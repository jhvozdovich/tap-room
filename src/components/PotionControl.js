import React from "react";
import PotionList from "./PotionList";
import NewPotionForm from "./NewPotionForm";
import PotionDetail from "./PotionDetail";
import EditPotionForm from "./EditPotionForm";

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
          effect: "Visually brightens everything to a light level of 15",
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

  handleSelectedPotion = (id) => {
    if (this.state.selectedPotionVisible === null) {
      const selectedPotion = this.state.potionList.filter(potion => potion.id === id)[0];
      this.setState({ selectedPotionVisible: selectedPotion });
      console.log(selectedPotion);
    } else {
      this.setState({ selectedPotionVisible: null });
    }
  }

  handleUpdatingFormVisible = () => {
    this.setState(prevState => ({
      updatingFormVisible: !prevState.updatingFormVisible
    }));
  }

  handleUpdatingPotion = (potionToUpdate) => {
    const newPotionList = this.state.potionList
      .filter(potion => potion.id !== this.state.selectedPotionVisible.id)
      .concat(potionToUpdate);
    this.setState({
      potionList: newPotionList,
      updatingFormVisible: false,
      selectedPotionVisible: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let navButton = null;
    if (this.state.updatingFormVisible) {
      currentlyVisibleState = <EditPotionForm
        potion={this.state.selectedPotionVisible}
        onEditPotion={this.handleUpdatingPotion} />
      navButton = <button onClick={this.handleUpdatingFormVisible}>Back to Potion</button>
    } else if (this.state.selectedPotionVisible !== null) {
      currentlyVisibleState = <PotionDetail
        potion={this.state.selectedPotionVisible}
        onClickingUpdate={this.handleUpdatingFormVisible} />
      navButton = <button onClick={this.handleSelectedPotion}>Back to List</button>
    } else if (this.state.creatingFormVisible) {
      currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotion} />
      navButton = <button onClick={this.handleCreatingFormVisible}>Back to List</button>
    } else {
      currentlyVisibleState = <PotionList
        potionList={this.state.potionList}
        onPotionSelection={this.handleSelectedPotion} />
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