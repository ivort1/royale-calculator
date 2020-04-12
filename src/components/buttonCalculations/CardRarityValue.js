const CardRarityValue = (props) => {
    
    const card = props.cardRarity;
    
    if(card === "common") {
        return props.valueOfSelectedRarity(9586)
    }
    if(card === "rare") {
        return props.valueOfSelectedRarity(2586)

    }
    if(card === "epic") {
        return props.valueOfSelectedRarity(386)
    }
    if(card === "legendary") {
        return props.valueOfSelectedRarity(36)
    }
    if(card === "")  {
        return null
    }
}
export default CardRarityValue;