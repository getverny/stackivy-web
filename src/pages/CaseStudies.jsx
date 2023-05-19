import CaseHero from "../components/caseHero";
import II from "../components/caseStudyII";
import Challenges from "../components/challenges";
import Footer from "../components/footer";
import Header from "../components/navBar";
import PaymentAccount from "../components/paymentAccount";
import Result from "../components/result";
import Revenue from "../components/revenue";
import Roady from "../components/roady";
import RoadyChallenges from "../components/roadyChallenges";
import SolutionCases from "../components/solutionCases";



function CaseStudies() {
  return (
    <div>
      <Header/>
      <CaseHero/>
      <Revenue/>
      <Challenges/>
      <SolutionCases/>
      <II/>
      <Roady/>
      <RoadyChallenges/>
      <PaymentAccount/>
      <Result/>
      <Footer/>
    </div>
  );
}

export default CaseStudies;
