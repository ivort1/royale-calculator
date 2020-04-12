import React, {Component} from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components 
import CardRarityMenu from './components/CardRarityMenu';
import CardLevelMenu from './components/CardLevelMenu';
import CardAmountInput from './components/cardAmount/CardAmountInput';
import CardDataOutput from './components/CardCalculations';
import CardRarityValue from './components/buttonCalculations/CardRarityValue';
import CardDatabase from './CardDatabase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cardRarity: "",
      cardLevel: "",
      amountOfCards: "",
    }
    this.setCardValues = this.setCardValues.bind(this);
  }

  setCardValues = (event) => {
    const {name, value} = event.target

    this.setState({
          [name]: value
    })
  }


  setValueOfSelectedRarity = (value) => {
    return value
  }

  // setTotalOfUsedCardLevels = () => {

  // }
    
  render () {
    return (

        <div>
          <h1 id="superCellText">Clash Royale Card Calculator</h1>

          <CardDatabase
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} />

          <CardRarityMenu
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity} />

          <CardRarityValue
            cardRarity={this.state.cardRarity}
            valueOfSelectedRarity={this.setValueOfSelectedRarity} />

          <CardLevelMenu
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} />

          <CardAmountInput
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            amountOfCards={this.state.amountOfCards} />

          <CardDataOutput
            cardRarity={this.state.cardRarity} />
        </div> 
    );
  }
}
export default App;
