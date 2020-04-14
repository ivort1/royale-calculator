import React from 'react';

const CardCalculationsButton = (props) => {
    if(props.cardRarity === "") {
        return null
    } else {
        return (
            <div>
                <br />
                <button onClick={props.calculate}>Calculate</button>
                <h1>{props.cardsNeeded}</h1>
            </div>
        )
    }
}
export default CardCalculationsButton;