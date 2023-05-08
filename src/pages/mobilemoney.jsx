import Footer from "../components/footer";
import LinkMoney from "../components/linkMoney";
import MobileHeader from "../components/mmHeader";
import MobileHero from "../components/mobileHero";
import MobileInfo from "../components/mobileInfo";
import SendMoney from "../components/sendMoney";
import {ReactTitle} from 'react-meta-tags';




function MobileMoney() {
  return (
    <div>
      <ReactTitle title="Mobile Money | Stackivy"/>
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
