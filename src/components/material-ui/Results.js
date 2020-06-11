import React from 'react';

const Results = (props) => {
    let requests = null;
    let rarity = "";

    if((props.cardRarity === 9586) || (props.cardRarity === 2586) || (props.cardRarity === 386)) {
        requests = Math.ceil(props.cardsNeeded / props.requestValue);
    } else {
        requests = ". Legendary cards cannot be requested ☹️"
    }

    if (props.cardRarity === 9586) { rarity = "Common"}
    if (props.cardRarity === 2586) { rarity = "Rare"}
    if (props.cardRarity === 386) { rarity = "Epic"}
    if (props.cardRarity === 36) { rarity = "Legendary"}


    const renderRequests = () => {
        if(Number.isInteger(requests)) {
            return <span>, which will take <b className="resultsText">{requests}</b> requests.</span>
        } else {
            return <span>{requests}</span>
        }
    }
    return(
        <div style={{width: "40vh", marginTop: "10vh"}}>
            You need <b className="resultsText">{props.cardsNeeded}</b> more cards to max out your <b>Level {props.cardLevel} {rarity}</b> card{renderRequests()}
        </div>
    );
}
export default Results;