import Fast from "../components/fastEasy";
import Flex from "../components/flex";
import FlexLending from "../components/flexlending";
import NoTop from "../components/footerwithoutTop";
import HargonHero from "../components/hargonHero";
import HargonMarket from "../components/hargonMarket";
import HargonHeader from "../components/hargonNavbar";
import HargonTraction from "../components/hargonTraction";
import LoanInterest from "../components/loanInterest";

function Hargon() {
  return (
    <div>
      <HargonHeader/>
      <HargonHero/>
      <FlexLending/>
      <Fast/>
      <LoanInterest/>
      <Flex/>
      <HargonTraction/>
      <HargonMarket/>
      <NoTop/>
    </div>
  );
}

export default Hargon;
