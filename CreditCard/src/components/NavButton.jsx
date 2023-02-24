import {Link} from "react-router-dom";

function NavButton(props) {

    return (
        <Link to={ props.to }>
            <button>Tillbaka till { props.prevPage }</button>
        </Link>
    )
}

export default NavButton;