import React from 'react';

const CardRarityMenu = (props) => {
    return (
        <div>
            <label>
                Card Rarity <br />
                <select value={props.cardRarity} name ="cardRarity" onChange={props.setCardValues}>
                    <option value=""></option>
                    <option value="common">Common</option>
                    <option value="rare">Rare</option>
                    <option value="epic">Epic</option>
                    <option value="legendary">Legendary</option>
                </select>
                <h2>{props.cardRarity}</h2>
            </label>
        </div>
    );
}
export default CardRarityMenu;