import BenefitStackivy from "../components/benefitStackivy";
import ExplorePotential from "../components/explorePotentials";
import FAQ from "../components/faq";
import NoTop from "../components/footerwithoutTop";
import Header from "../components/navBar";
import StartupHero from "../components/startupHero";
import Tellus from "../components/tellus";


function ForStartup() {
  return (
    <div>
      <Header/>
      <StartupHero/>
      <Tellus/>
      <BenefitStackivy/>
      <FAQ/>
      <ExplorePotential/>
      <NoTop/>
    </div>
  );
}

export default ForStartup;
