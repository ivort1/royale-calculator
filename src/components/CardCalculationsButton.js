import React from 'react';

const CardCalculationsButton = (props) => {
    if(props.cardRarity === "") {
        return null
    } else {
        return (
            <div>
                <br />
                <button onClick={props.calculate}>Calculate</button>
                {/* <p>z: {props.calculate}</p>  */}
            </div>
        )
    }
}
export default CardCalculationsButton;