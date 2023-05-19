import CaseHero from "../components/caseHero";
import II from "../components/caseStudyII";
import Challenges from "../components/challenges";
import Footer from "../components/footer";
import Header from "../components/navBar";
import Result from "../components/result";
import Revenue from "../components/revenue";
import Roady from "../components/roady";
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
      <Result/>

      
      <Footer/>
    </div>
  );
}

export default CaseStudies;
