// import React from 'react';
import common from './Common';
import rare from './Rare';
import epic from './Epic';
import legendary from './Legendary';


const CardDatabase = (props) => {

    const card = props.cardRarity;
    const level = props.cardLevel;
    let filteredArray = [];
    let pushedArray = [];
    let reducedArray = [];

    const array = (rarityOfArray) => {
        filteredArray = rarityOfArray.filter(item => item.key <= level)

        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
            console.log(pushedArray);
        }

        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }
    
    if(card === "9586") {return array(common)}

    if(card === "2586") {return array(rare)}

    if(card === "386") {return array(epic)}

    if(card === "36") {return array(legendary)}

    if(card === "")  {return null}
}
export default CardDatabase;