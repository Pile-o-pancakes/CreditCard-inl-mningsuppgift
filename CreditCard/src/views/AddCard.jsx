import { useState } from "react";
import NavButton from "./../components/NavButton";
import InputField from "./../components/InputField";
import Card from "./../components/Card";
import Top from "./../components/Top";

function AddCard(props) {

    const [vendorName, setVendorName] = useState("BITCOIN INC");

    const [card, setCard] = useState({
        cardOwner: "",
        cardNumber: "XXXX XXXX XXXX XXXX",
        CCV: "000",
        vendorName: "BITCOIN INC",
        expireDate: "01/01",
        vendorID: 1});

    const cardData = props.cardData;

    function handleOnChangeNumber(event) {
        setCard(prevState => ({
            ...prevState, cardNumber: (event.target.value)
        }))
    }

    function handleOnChangeName(event) {
        setCard(prevState => ({
            ...prevState, cardOwner: (event.target.value)
        }))
    }

    function handleOnChangeExpireDate(event) {
        setCard(prevState => ({
            ...prevState, expireDate: (event.target.value)
        }))
    }

    function handleOnChangeCCV(event) {
        setCard(prevState => ({
            ...prevState, CCV: (event.target.value)
        }))
    }
    
    function saveCardData() {
        let tempCardData = [...cardData];
        tempCardData.push(card);
        props.setCardData(tempCardData);
    }

    return (
        <div>

            <Card className="card" cardData={ card } handleClick={ () => {} } cardIndex={ 0 }/>

            <NavButton to="/" prevPage="Hem"/>
            <Top pageTitle="ADD A NEW BANK CARD"/>
            
            <select onChange={ (event) => setVendorName(event.target.value) }>
                { cardData.map((card, index) =>
                    <option key={"card" + index} value={ card.vendorName }>
                        { card.vendorName }
                    </option>
                )}
            </select>
            
            <p>CARD NUMBER</p>
            <InputField placeholder={ "" } handleOnChange={ handleOnChangeNumber }/>

            <p>CARDHOLDER NAME</p>
            <InputField placeholder={ "FIRSTNAME LASTNAME" } handleOnChange={ handleOnChangeName }/>

            <p>VALID THRU</p>
            <InputField placeholder={ "" } handleOnChange={ handleOnChangeExpireDate }/>

            <p>CCV</p>
            <InputField placeholder={ "" } handleOnChange={ handleOnChangeCCV }/>

            <button className="saveCardButton" onClick={ () => { saveCardData() } }>
                Spara kort
            </button>
        </div>
    )
}

export default AddCard;