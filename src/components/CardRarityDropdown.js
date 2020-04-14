import React from 'react';

const CardRarityDropdown = (props) => {
    return (
        <div>
            <label>
                Card Rarity <br />
                <select value={props.cardRarity} name ="cardRarity" onChange={props.setCardValues}>
                    <option value=""></option>
                    <option value="9586">Common</option>
                    <option value="2586">Rare</option>
                    <option value="386">Epic</option>
                    <option value="36">Legendary</option>
                </select>
            </label>
        </div>
    );
}
export default CardRarityDropdown;