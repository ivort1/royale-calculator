import common from './Common';
import rare from './Rare';
import epic from './Epic';
import legendary from './Legendary';

const goldDatabase = (cardRarity, cardLevel) => {

    let filteredArray = [];
    let pushedArray = [];
    let reducedArray = [];

    const goldArray = (rarityOfArray) => {
        filteredArray = rarityOfArray.filter(item => item.key > cardLevel)

        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].goldRequiredToUpgrade)
            console.log(pushedArray);
        }

        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }
    
    if(cardRarity === 9586) {return goldArray(common)}

    if(cardRarity === 2586) {return goldArray(rare)}

    if(cardRarity === 386) {return goldArray(epic)}

    if(cardRarity === 36) {return goldArray(legendary)}

    if(cardRarity === "")  {return null}
}
export default goldDatabase;