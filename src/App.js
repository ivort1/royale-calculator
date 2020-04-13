import React, {Component} from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components 
import CardRarityMenu from './components/CardRarityMenu';
import CardLevelMenu from './components/CardLevelMenu';
import CardAmountInput from './components/cardAmount/CardAmountInput';
import CardCalculations from './components/CardCalculations';
import CardRarityValue from './components/buttonCalculations/CardRarityValue';
import CardDatabase from './containers/cardDatabase/CardDatabase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cardRarity: "",
      cardLevel: "",
      amountOfCards: "",
      value: ""
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

  calculate = () => {
    let v = this.setValueOfSelectedRarity();
    console.log("v: " + v)

    let w = <CardDatabase />
    console.log("w: " + w)
   
    let x = v - w;
    console.log("x: " + x)
   
    let y = this.state.amountOfCards;
    console.log("y: " + y)
   
    let z = x - y;
    console.log("z: " + z)
   
    return z
  }
    
  render () {
    return (

        <div>
          <h1 id="superCellText">Clash Royale Card Calculator</h1>

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

          <CardDatabase
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} />

          <CardAmountInput
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            amountOfCards={this.state.amountOfCards} />

          <CardCalculations
            calculate={this.calculate}
            cardRarity={this.state.cardRarity} />
        </div> 
    );
  }
}
export default App;
