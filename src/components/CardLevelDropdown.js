import React from 'react';

const CardLevelDropdown = (props) => {
    const card = props.cardRarity;
    let cardLevelArray = [];

    if(card === "9586") { cardLevelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }

    if(card === "2586") { cardLevelArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }

    if(card === "386") { cardLevelArray = [6, 7, 8, 9, 10, 11, 12] }

    if(card === "36") { cardLevelArray = [9, 10, 11, 12] }

    if(card === "")  { return null }

    return (
        <div>
            <label>
                Current Card Level <br />
                <select
                    value={props.cardLevel}
                    name="cardLevel"
                    onChange={props.setCardValues}>
                    
                    <option value=""></option>
                    {
                        cardLevelArray.map(element => {
                            return <option value={element}>{element}</option>
                        })
                    }
                </select>
            </label>
        </div>
        
    )
}
export default CardLevelDropdown;