import bitCoinLogo from "./../assets/vendor-bitcoin.svg";
import blockChainLogo from "./../assets/vendor-blockchain.svg";
import evilLogo from "./../assets/vendor-evil.svg";
import ninjaLogo from "./../assets/vendor-ninja.svg";

function VendorLogo(props) {

    const vendor = props.vendor;

    return (
        <img className="vendorLogo" src={ vendor === 1 ? bitCoinLogo : vendor === 2 ? blockChainLogo : vendor === 3 ? evilLogo : vendor === 4 ? ninjaLogo : null }></img>
    )
}

export default VendorLogo;