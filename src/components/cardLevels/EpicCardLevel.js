import React from 'react';

const EpicCardLevel = (props) => {
    return (
        <div>
            <label>
                Current Card Level <br />

                <select
                    value={props.cardLevel}
                    name="cardLevel"
                    onChange={props.setCardValues}>
                    
                    <option value=""></option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </select>

                <h3>{props.cardLevel}</h3>

            </label>
        </div>
    );
}
export default EpicCardLevel;