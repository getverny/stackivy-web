import Footer from "../components/footer";
import LinkMoney from "../components/linkMoney";
import MobileHeader from "../components/mmHeader";
import MobileHero from "../components/mobileHero";
import MobileInfo from "../components/mobileInfo";
import SendMoney from "../components/sendMoney";


function MobileMoney() {
  return (
    <div>
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
