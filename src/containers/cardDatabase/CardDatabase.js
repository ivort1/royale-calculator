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
    
    if(card === "common") {
        filteredArray = common.filter(item => item.key <= level)
        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
            console.log(pushedArray);
        }
        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }

    if(card === "rare") {
        filteredArray = rare.filter(item => item.key <= level)
        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
            console.log(pushedArray);
        }
        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }

    if(card === "epic") {
        filteredArray = epic.filter(item => item.key <= level)
        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
            console.log(pushedArray);
        }
        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }

    if(card === "legendary") {
        filteredArray = legendary.filter(item => item.key <= level)
        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
            console.log(pushedArray);
        }
        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
        // return <p>w: {reducedArray}</p>
    }

    if(card === "")  {
        return null
    }
}
export default CardDatabase;

// return (
        //     <div>
        //         {Database.legendary.map((item) => {
        //             return (
        //                 <div>
        //                     <h5>Level: {item.level}</h5>
        //                     <h5>Cards: {item.cardsRequiredToUpgrade}</h5>
        //                     <h5>Gold: {item.goldRequiredToUpgrade}</h5>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )