
import { Description, Title } from "react-head-meta";
import Automated from "../components/automated";
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
      <div>
        <Title title="Financial Management - Custom Solutions for Your Business" />
        <Description description="Take your business to the next level with custom-ordered financial management solutions that ensure total optimization of your resources" />
      </div>
      <Header/>
      <CustomHero/>
      <ManageFinance/>
      <CustomBg/>
      <Strategy/>
      <Automated/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default CustomMade;
