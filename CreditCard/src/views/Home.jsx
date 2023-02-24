import "./../styles/home.css";

import Top from "./../components/Top";
import CardStack from "./../components/CardStack";

import {Link} from "react-router-dom";

function Home(props) {

    return (
        <div className="home">
            <Top pageTitle="E-WALLET"/>
            <Link className="toAddCardButton" to="/addcard">
                Lägg till Nytt kort
            </Link>
            <CardStack className="cardStack" cardData={ props.cardData } setCardData={ props.setCardData }/>
        </div>
    )
}

export default Home;