
import BenefitWork from "../components/benefitsWorking";
import CareerFooter from "../components/careerFooter";
import CareersHero from "../components/careersHero";
import Footer from "../components/footer";
import MobileHeader from "../components/mmHeader";
import OpenPosition from "../components/openPosition";
import OurTalents from "../components/ourTalents";


function Careers() {
  return (
    <div>
      <MobileHeader/>
      <CareersHero/>
      <OpenPosition/>
      <OurTalents/>
      <CareerFooter/>
      <BenefitWork/>
      <Footer/>
    </div>
  );
}

export default Careers;
