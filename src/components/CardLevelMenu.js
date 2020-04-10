import React from 'react';
import CommonCardLevel from './cardLevels/CommonCardLevel';
import RareCardLevel from './cardLevels/RareCardLevel';
import EpicCardLevel from './cardLevels/EpicCardLevel';
import LegendaryCardLevel from './cardLevels/LegendaryCardLevel';

const CardLevelMenu = (props) => {
    const card = props.cardRarity;
    
    if(card === "common") {
        return <CommonCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "rare") {
        return <RareCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "epic") {
        return <EpicCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "legendary") {
        return <LegendaryCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "")  {
        return null
    }
}
export default CardLevelMenu;