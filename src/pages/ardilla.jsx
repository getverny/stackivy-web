import ArdillaHero from "../components/ardillaHero";
import ArdillaHeader from "../components/ardillaNavbar";
import FinancialCoaching from "../components/financialCoaching";
import NoTop from "../components/footerwithoutTop";
import LearnEarn from "../components/learnEarn";
import SavePace from "../components/savePace";
import Traction from "../components/traction";
import Transact from "../components/transactArdilla";
import { Title, Description } from "react-head-meta";

function Ardilla() {
  return (
    <div>
      <div>
        <Title title="Ardilla - Wealth Management with Ardilla" />
        <Description description="With Ardilla, you can access financial tools and services that help you build wealth and achieve financial freedom" />
      </div>
      <ArdillaHeader/>
      <ArdillaHero/>
      <FinancialCoaching/>
      <SavePace/>
      <Traction/>
      <Transact/>
      <LearnEarn/>
      <NoTop/>
    </div>
  );
}

export default Ardilla;
