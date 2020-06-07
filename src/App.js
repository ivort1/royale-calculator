import React, {Component} from 'react';

// CSS
import './App.css';

// Components 
import CardLevelDropdown from './components/CardLevelDropdown';
import CardAmountInput from './components/CardAmountInput';
import CardCalculationsButton from './components/CardCalculationsButton';

import CardRarityDropdown from './components/CardRarityDropdown';

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
   
    return this.state.cardsNeeded;
  }

  render () {
    const cardRarityObject = [
      { key: 1, text: 'Common', value: 9586 },
      { key: 2, text: 'Rare', value: 2586 },
      { key: 3, text: 'Epic', value: 386 },
      { key: 4, text: 'Legendary', value: 36 }
    ]    

    return (
        <div className="flex">
          <h1 id="superCellText">Clash Royale Card Calculator</h1>

          <CardRarityDropdown 
            label={"Card Rarity"}
            value={this.state.cardRarity}
            name={"cardRarity"}
            onChange={this.setCardValues}
            object={cardRarityObject} />

          <CardLevelDropdown
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} />

          <CardAmountInput
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            amountOfCards={this.state.amountOfCards} />

          <CardCalculationsButton
            calculate={this.calculate}
            cardRarity={this.state.cardRarity}
            cardsNeeded={this.state.cardsNeeded} />
        </div>
    );
  }
}
export default App;