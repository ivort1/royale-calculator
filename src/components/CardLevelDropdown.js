import React from 'react';
import CommonCardLevel from './cardLevels/CommonCardLevel';
import RareCardLevel from './cardLevels/RareCardLevel';
import EpicCardLevel from './cardLevels/EpicCardLevel';
import LegendaryCardLevel from './cardLevels/LegendaryCardLevel';

const CardLevelDropdown = (props) => {
    const card = props.cardRarity;
    
    if(card === "9586") {
        return <CommonCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "2586") {
        return <RareCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "386") {
        return <EpicCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "36") {
        return <LegendaryCardLevel cardLevel={props.cardLevel} setCardValues={props.setCardValues}/>
    }
    if(card === "")  {
        return null
    }
}
export default CardLevelDropdown;