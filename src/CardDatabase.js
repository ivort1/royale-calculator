import React from 'react';
import Database from './cardDatabase.json';
import common from './components/cardDatabase/Common';


const CardDatabase = (props) => {

    const card = props.cardRarity;
    const level = props.cardLevel;
    
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const five = numbers[4] //5

    // const result = numbers.filter(number => number < five);
    // console.log(result);

    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // console.log(result.reduce(reducer));
    
    if(card === "common") {
    const newArray = [];

        return (
            <div>
                {common.map((item) => {
                    if(item.key <  level) {
                         const addCard = newArray.push(item.cardsRequiredToUpgrade)
                         return <h5>addCard Array - {addCard}</h5>
                         
                    }
                    return <h4>popped array - {newArray}</h4>
                    // return <h5>array - {item.cardsRequiredToUpgrade}</h5>
                })}
            </div>
        )
    }
    if(card === "rare") {
        return (
            <div>
                {Database.rare.map((item) => {
                    return (
                        <div>
                            <h5>Level: {item.level}</h5>
                            <h5>Cards: {item.cardsRequiredToUpgrade}</h5>
                            <h5>Gold: {item.goldRequiredToUpgrade}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
    if(card === "epic") {
        return (
            <div>
                {Database.epic.map((item) => {
                    return (
                        <div>
                            <h5>Level: {item.level}</h5>
                            <h5>Cards: {item.cardsRequiredToUpgrade}</h5>
                            <h5>Gold: {item.goldRequiredToUpgrade}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
    if(card === "legendary") {
        return (
            <div>
                {Database.legendary.map((item) => {
                    return (
                        <div>
                            <h5>Level: {item.level}</h5>
                            <h5>Cards: {item.cardsRequiredToUpgrade}</h5>
                            <h5>Gold: {item.goldRequiredToUpgrade}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
    if(card === "")  {
        return null
    }
}
export default CardDatabase;