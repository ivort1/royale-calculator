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
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </label>
        </div>
    );
}
export default EpicCardLevel;