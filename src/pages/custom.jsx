
import CustomHero from "../components/customHero";
import CustomBg from "../components/custombg";
import Footer from "../components/footer";
import ManageFinance from "../components/manageFinance";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";
import Strategy from "../components/strategy";


function CustomMade() {
  return (
    <div>
      <Header/>
      <CustomHero/>
      <ManageFinance/>
      <CustomBg/>
      <Strategy/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default CustomMade;
