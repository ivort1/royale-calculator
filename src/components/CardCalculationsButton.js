import React from 'react';

import './Button.css';

const CardCalculationsButton = (props) => {
    if(props.cardRarity === "") {
        return null
    } else {
        return (
            <div>
                <br />
                <button id="button" onClick={props.calculate}>CALCULATE</button>
                <h1>{props.cardsNeeded}</h1>
            </div>
        )
    }
}
export default CardCalculationsButton;