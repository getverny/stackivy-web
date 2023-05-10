import EducationHero from "../components/educationHero";
import ExposingKid from "../components/exposingKid";
import Fincourse from "../components/financialCourse";
import Footer from "../components/footer";
import IntMoney from "../components/intMoney";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";




function Education() {
  return (
    <div>
      <Header/>
      <EducationHero/>
      <ExposingKid/>
      <IntMoney/>
      <Fincourse/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default Education;
