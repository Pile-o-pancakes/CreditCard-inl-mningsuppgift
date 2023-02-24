import chipIconDark from "./../assets/chip-dark.svg";
import chipIconLight from "./../assets/chip-light.svg";

function ChipIcon(props) {

    return (
        <img className="chipIcon" src={ props.color === 1 ? chipIconDark : chipIconLight }></img>
    )
}

export default ChipIcon;