import CredSalary from "../components/credSalary";
import Footer from "../components/footer";
import HrHero from "../components/hrHero";
import MobileInfo from "../components/mobileInfo";
import Header from "../components/navBar";
import WhyOne from "../components/whyOnescud";




function HR() {
  return (
    <div>
      <Header/>
      <HrHero/>
      <WhyOne/>
      <CredSalary/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default HR
