import React from 'react';

const CardDataOutput = (props) => {
    if(props.cardRarity === "") {
        return null
    } else {
        return (
            <div>
                <br />
                <button>Calculate</button>
                <h3>Amount of cards required to max:</h3>
            </div>
        )
    }
}
export default CardDataOutput;