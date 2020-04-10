import React, {Component} from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components 
import CardRarityMenu from './components/CardRarityMenu';
import CardLevelMenu from './components/CardLevelMenu';
import CardAmountInput from './components/cardAmount/CardAmountInput';
import CardDataOutput from './components/CardDataOutput';

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

  // setMinMax = () => {
  //   if()
  //   return (

  //   )
  // }
    
  render () {
    return (

        <div>
          <h1 id="superCellText">Clash Royale Card Calculator</h1>

          <CardRarityMenu
            setCardValues={this.setCardValues}
            cardRarity={this.state.cardRarity} />

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
