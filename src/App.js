import React, {Component} from 'react';

// CSS
import './App.css';

// Components 
import CardLevelDropdown from './components/CardLevelDropdown';

//Material-UI
import Dropdown from './components/material-ui/Dropdown';
import TextField from './components/material-ui/TextField';
import AppBar from './components/material-ui/AppBar';
import Button from './components/material-ui/Button';

import cardDatabase from './containers/cardDatabase/cardDatabase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardRarity: "",
      cardLevel: "",
      amountOfCards: "",
      cardsNeeded: ""
    }
    this.setCardValues = this.setCardValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  setCardValues = (event) => {
    const {name, value} = event.target

    this.setState({
          [name]: value
    })
  }

  calculate = () => {
    let rarity = this.state.cardRarity;
    let level = this.state.cardLevel;

    console.log("v: " + rarity) //v = card rarity: common - 9586, rare - 2586, epic - 386, legendary - 36

    let w = cardDatabase(rarity, level);
    console.log("w: " + w) //w = the total number of cards that have already been used for upgrades based on the card's selected level
   
    let x = rarity - w;
    console.log("x: " + x) // x = the amount of cards required to max the card solely based on its current level
   
    let y = this.state.amountOfCards;
    console.log("y: " + y) // y = the amount of cards the player currently has
   
    this.setState({
      cardsNeeded: x - y
    })
    let z = x - y;
    console.log("z: " + z)// z = the number of remaining cards the player needs to collect to max the card out
    console.log("----------")
    return this.state.cardsNeeded;
  }

  render () { 

    return (
        <div>
          <div className="appBar">
            <AppBar />
          </div>

          <div className="flex">
            <Dropdown
              label={"Card Rarity"}
              value={this.state.cardRarity}
              name={"cardRarity"}
              onChange={this.setCardValues} />

            <CardLevelDropdown
              label={"Card Level"}
              value={this.state.cardLevel}
              name={"cardLevel"}
              onChange={this.setCardValues}
              cardRarity={this.state.cardRarity} />

            <TextField
              label={"# of cards currently owned"}
              value={this.state.amountOfCards}
              name="amountOfCards"
              onChange={this.setCardValues} />

            <Button
              calculate={this.calculate}
              cardRarity={this.state.cardRarity}
              cardLevel={this.state.cardLevel}
              amountOfCards={this.state.amountOfCards}
              cardsNeeded={this.state.cardsNeeded} />
        </div>
      </div>
    );
  }
}
export default App;