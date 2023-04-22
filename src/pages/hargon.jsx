import Fast from "../components/fastEasy";
import Flex from "../components/flex";
import FlexLending from "../components/flexlending";
import Footer from "../components/footer";
import HargonHero from "../components/hargonHero";
import HargonHeader from "../components/hargonNavbar";
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
      <Footer/>
    </div>
  );
}

export default Hargon;
