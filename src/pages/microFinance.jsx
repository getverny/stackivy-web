import { Description, Title } from "react-head-meta";
import CAN from "../components/can";
import Footer from "../components/footer";
import Info from "../components/info";
import InstantTransfer from "../components/instantTransfers";
import MicroHero from "../components/microHero";
import MoreReach from "../components/moreReach";
import Header from "../components/navBar";
import Sychronize from "../components/sychronizedBnaking";


function MicroFinance() {
  return (
    <div>
    <div>
      <Title title="Microfinance banking - Change Your Banking Experience" />
      <Description description="At Stackivy, we have revolutionized your banking experience, giving it a more personal approach." />
    </div>
     <Header/>
     <MicroHero/>
     <InstantTransfer/>
     <MoreReach/>
     <Sychronize/>
     <CAN/>
     <Info/>
     <Footer/>
    </div>
  );
}

export default MicroFinance;
