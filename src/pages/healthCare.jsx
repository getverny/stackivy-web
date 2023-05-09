import FinancialArdilla from "../components/financialArdilla";
import Footer from "../components/footer";
import HealthHero from "../components/healthHero";
import HealthcareBusiness from "../components/healthcareBusiness";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";
import TrackControl from "../components/trackControl";



function HealthCare() {
  return (
    <div>
      <Header/>
      <HealthHero/>
      <FinancialArdilla/>
      <TrackControl/>
      <HealthcareBusiness/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default HealthCare;
