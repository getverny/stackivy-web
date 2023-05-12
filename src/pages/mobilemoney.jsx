import { Description, Title } from "react-head-meta";
import Footer from "../components/footer";
import LinkMoney from "../components/linkMoney";
import MobileHeader from "../components/mmHeader";
import MobileHero from "../components/mobileHero";
import MobileInfo from "../components/mobileInfo";
import SendMoney from "../components/sendMoney";


function MobileMoney() {
  return (
    <div>
      <div>
        <Title title="Mobile banking - Banking Anywhere, Anytime." />
        <Description description="Bank quickly and on the go, wherever and whenever, on Stackivy's mobile banking platform." />
      </div>
      <MobileHeader/>
      <MobileHero/>
      <SendMoney/>
      <LinkMoney/>
      <MobileInfo/>
     <Footer/>
    </div>
  );
}

export default MobileMoney;
