import React from 'react';

const Dropdown = (props) => {

    let object = props.object;

    return(
        <div>
            <label>
                {props.label}<br></br>
                <select
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}>
                    <option value=""></option>
                    {
                        object.map(element => {
                            return <option value={element.value}>{element.text}</option>
                        })
                    }
                </select>
            </label>
        </div>
    );
}
export default Dropdown;