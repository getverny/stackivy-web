import BankDifferent from "../components/bankDifferent";
import BuildIntegrate from "../components/buildIntegrate";
import EcommerceHero from "../components/ecommerceHero";
import Footer from "../components/footer";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";
import SimplifiedPayment from "../components/simplifiedPayment";
import TrackPayment from "../components/trackPayment";
import YourOnescud from "../components/yourOnescud";
import Zettarh from "../components/zettarh";



function Ecommerce() {
  return (
    <div>
      <Header/>
      <EcommerceHero/>
      <SimplifiedPayment/>
      <BankDifferent/>
      <Zettarh/>
      <BuildIntegrate/>
      <TrackPayment/>
      <YourOnescud/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default Ecommerce;
