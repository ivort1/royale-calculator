import React from 'react';

import './Button.css';

const CardCalculationsButton = (props) => {
   return(
       <div>
           <br />
            <button className="superCellText" id="button" onClick={props.calculate}>Calculate</button>
            <h1>{props.cardsNeeded}</h1>
       </div>
   );
}
export default CardCalculationsButton;