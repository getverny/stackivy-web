import { Description, Title } from "react-head-meta";
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
      <div>
        <Title title="Cryptocurrency - Trade Currencies and Buy Stocks" />
        <Description description="Do so much more with a little help. Apply and get credit that helps maintain financial stability." />
      </div>
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
