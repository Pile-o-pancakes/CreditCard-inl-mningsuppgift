import { useState } from 'react';
import Card from "./Card";

function CardStack(props) {

    const [selectedCard, setSelectedCard] = useState(null);
    const [allCards, setAllCards] = useState(props.cardData);

    function handleClick(index) {
        const tempAllCards = [...allCards];

        if(selectedCard === null) {
            const tempCard = tempAllCards.splice(index, 1)[0];

            setSelectedCard(tempCard);
            setAllCards(tempAllCards);
        }
        else {
            const tempCard = tempAllCards.splice(index, 1)[0];
            tempAllCards.push(selectedCard);

            setSelectedCard(tempCard);
            setAllCards(tempAllCards);
        }
    }

    return (
        <div className="cardStack">
            { selectedCard != null && <Card className="selectedCard" cardData={ selectedCard } handleClick={ () => {} }/> }
            { allCards.map((card, index) =>
                <Card className={ "card" } key={ index } cardData={ card } handleClick={ handleClick } cardIndex={ index }/> )
            }
        </div>
    )
}

export default CardStack;