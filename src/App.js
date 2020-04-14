import React, {Component} from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components 
import CardRarityDropdown from './components/CardRarityDropdown';
import CardLevelDropdown from './components/CardLevelDropdown';
import CardAmountInput from './components/CardAmountInput';
import CardCalculationsButton from './components/CardCalculationsButton';
import CardDatabase from './containers/cardDatabase/CardDatabase';

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

  calculate = () => {
    let v = this.state.cardRarity;
    console.log("v: " + v)

    let w = <CardDatabase />;
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

          <CardRarityDropdown
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity} />

          <CardLevelDropdown
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} />

          <CardDatabase
            cardRarity={this.state.cardRarity}
            cardLevel={this.state.cardLevel} 
            reducedArray={this.state.reducedArray}/>

          <CardAmountInput
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity}
            amountOfCards={this.state.amountOfCards} />

          <CardCalculationsButton
            calculate={this.calculate}
            cardRarity={this.state.cardRarity} />
        </div> 
    );
  }
}
export default App;