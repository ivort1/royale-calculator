// import React from 'react';

const CardRarityValue = (props) => {
    
    const card = props.cardRarity;
    
    if(card === "common") {
        return props.valueOfSelectedRarity(9586)
    }
    if(card === "rare") {
        return props.valueOfSelectedRarity(9586)

    }
    if(card === "epic") {
        return props.valueOfSelectedRarity(9586)
    }
    if(card === "legendary") {
        return props.valueOfSelectedRarity(9586)
        // return <p>v: {props.valueOfSelectedRarity(9586)}</p>
    }
    if(card === "")  {
        return null
    }
}
export default CardRarityValue;