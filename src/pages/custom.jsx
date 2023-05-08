
import CustomHero from "../components/customHero";
import Footer from "../components/footer";
import ManageFinance from "../components/manageFinance";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";


function CustomMade() {
  return (
    <div>
      <Header/>
      <CustomHero/>
      <ManageFinance/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default CustomMade;
