import BlackInfo from "../components/blackInfo";
import BPS from "../components/bps";
import CryptoHeader from "../components/cryptoHeader";
import CryptoHero from "../components/cryptoHero";
import CryptoSaving from "../components/cryptoSaving";
import NoTop from "../components/footerwithoutTop";
import InvestCurrency from "../components/investCurrency";
import TradeCrypto from "../components/tradeCrypto";
import Transaction from "../components/transaction";

function Crypto() {
  return (
    <div>
      <CryptoHeader/>
      <CryptoHero/>
      <TradeCrypto/>
      <CryptoSaving/>
      <Transaction/>
      <InvestCurrency/>
      <BPS/>
      <BlackInfo/>
      <NoTop/>
    </div>
  );
}

export default Crypto;
