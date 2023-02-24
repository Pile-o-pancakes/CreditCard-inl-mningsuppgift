import ChipIcon from "./ChipIcon";

import VendorLogo from "./VendorLogo";
import CardNumber from "./CardNumber";
import CardOwner from "./CardOwner";
import ExpireDate from "./ExpireDate";

import "./../styles/card.css";

function Card(props) {

    const handleClick = props.handleClick;
    const selectedCard = props.cardData;

    let vendorName = selectedCard.vendorName;
    vendorName = vendorName.toLowerCase();
    vendorName = vendorName.replace(/ /g, "_")

    const cardClasses = [props.className, vendorName]

    return (
        <div className={ cardClasses.join(" ") } onClick={ () => handleClick(props.cardIndex) }>
            <ChipIcon color={ selectedCard.vendorID }/>
            <VendorLogo vendor={ selectedCard.vendorID }/>
            <CardNumber cardNumber={ selectedCard.cardNumber }/>
            <p>CARDHOLDER NAME</p>
            <CardOwner cardOwner={ selectedCard.cardOwner }/>
            <p>VALID THRU</p>
            <ExpireDate expireDate={ selectedCard.expireDate }/>
        </div>
    )
}

export default Card;