import React from 'react';

const CardAmountInput = (props) => {
    if(props.cardRarity === "")
    {
        return null
    } else {
        return (
            <div>
                How many cards do you currently own? <br />
                <input
                    type="number"
                    value={props.amountOfCards}
                    name="amountOfCards" /*min={props.minNumber} max={props.maxNumber}*/
                    onChange={props.setCardValues}>
                </input>
            </div>
        )
    }
}
export default CardAmountInput;