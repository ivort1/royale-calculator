import React from 'react';

const LegendaryCardLevel = (props) => {
    return (
        <div>
            <label>
                Current Card Level <br />
                <select
                    value={props.cardLevel}
                    name="cardLevel"
                    onChange={props.setCardValues}>

                    <option value=""></option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </select>
            </label>

            <h3>{props.cardLevel}</h3>

        </div>
    );
}
export default LegendaryCardLevel;