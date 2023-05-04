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
