import React, {Component} from 'react';

// CSS
import './App.css';

// Components 
import CardLevelDropdown from './components/material-ui/CardLevelDropdown';

//Material-UI
import AppBar from './components/material-ui/AppBar/AppBar';
import Dropdown from './components/material-ui/CardRarityDropdown';
import TextField from './components/material-ui/TextField';
import Button from './components/material-ui/CalculateButton';
import Results from './components/material-ui/Results';
import ResetButton from './components/material-ui/ResetButton';

import cardDatabase from './containers/cardDatabase/cardDatabase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardRarity: "",
      cardLevel: "",
      amountOfCards: "",
      cardsNeeded: "",
      requestValue: "",
      visible: false
    }
    this.setCardValues = this.setCardValues.bind(this);
    this.calculate = this.calculate.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  setCardValues = (event) => {
    const {name, value} = event.target

    this.setState({
          [name]: value
    })

    if((name === "cardRarity") && (value === 9586)) {
      this.setState({
        requestValue: 40,
      })
    }

    if((name === "cardRarity") && ((value === 2586) || (value === 386))) {
      this.setState({
        requestValue: 4,
      })
    }
    
    if((name === "cardRarity") && (value === 36)) {
      this.setState({
        requestValue: null
      })
    }
    console.log("Request value: " + this.state.requestValue);
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
      cardsNeeded: x - y,
      visible: true

    })
    let z = x - y;
    console.log("z: " + z)// z = the number of remaining cards the player needs to collect to max the card out
    console.log("----------")

    return this.state.cardsNeeded;
  }

  resetForm = () => {
    this.setState({
      cardRarity: "",
      cardLevel: "",
      amountOfCards: "",
      visible: false
    })
  }

  render () { 

    return (
        <div>
       
          <AppBar />

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
              label={"# of Cards Owned"}
              value={this.state.amountOfCards}
              name="amountOfCards"
              onChange={this.setCardValues} />

            <Button
              cardRarity={this.state.cardRarity}
              cardLevel={this.state.cardLevel}
              amountOfCards={this.state.amountOfCards}
              calculate={this.calculate} />

            {
              this.state.visible ?
              <Results
                cardRarity={this.state.cardRarity}
                cardLevel={this.state.cardLevel}
                cardsNeeded={this.state.cardsNeeded}
                requestValue={this.state.requestValue} />
              :
              null
            }
            {
              this.state.visible ?
              <ResetButton
                onClick={this.resetForm} />
              :
              null
            } 

        </div>
      </div>
    );
  }
}
export default App;