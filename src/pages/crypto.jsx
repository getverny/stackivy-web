import CryptoHeader from "../components/cryptoHeader";
import CryptoHero from "../components/cryptoHero";
import CryptoSaving from "../components/cryptoSaving";
import NoTop from "../components/footerwithoutTop";
import TradeCrypto from "../components/tradeCrypto";

function Crypto() {
  return (
    <div>
      <CryptoHeader/>
      <CryptoHero/>
      <TradeCrypto/>
      <CryptoSaving/>
      <NoTop/>
    </div>
  );
}

export default Crypto;
