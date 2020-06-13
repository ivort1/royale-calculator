import React from 'react';
import gold from './Media/gold.svg';
import charity from './Media/charity.svg';
import cards from './Media/cards.svg';

import '../../App.css';

const Results = (props) => {
    let requests = null;
    let rarity = "";

    if((props.cardRarity === 9586) || (props.cardRarity === 2586) || (props.cardRarity === 386)) {
        requests = Math.ceil(props.cardsNeeded / props.requestValue);
    } else {
        requests = "Legendary cards cannot be requested ☹️"
    }

    if (props.cardRarity === 9586) { rarity = "Common"}
    if (props.cardRarity === 2586) { rarity = "Rare"}
    if (props.cardRarity === 386) { rarity = "Epic"}
    if (props.cardRarity === 36) { rarity = "Legendary"}


    const renderRequests = () => {
        if(Number.isInteger(requests)) {
            return <span>Requests: <b className="resultsText">{requests}</b></span>
        } else {
            return <span>{requests}</span>
        }
    }
    return(
        <div style={{width: "40vh", marginTop: "3vh"}}>
            <div style={{padding: "10px"}}>
                In order to max out your <b>Level {props.cardLevel} {rarity}</b> card:
            </div>

            <div className="resultsFlex" style={{padding: "10px"}}>
                <img className="resultsImage" src={cards} alt="cards"/><span>Cards Required: <b className="resultsText">{props.cardsNeeded}</b></span>
            </div>

            <div className="resultsFlex" style={{padding: "10px"}}>
                <img className="resultsImage" src={charity} alt="charity"/> {renderRequests()}
            </div>

            <div className="resultsFlex" style={{padding: "10px"}}>
                <img className="resultsImage" src={gold} alt="gold coin"/><span>Gold required: <b className="resultsText">{props.goldNeeded}</b></span>
            </div>
        </div>
    );
}
export default Results;