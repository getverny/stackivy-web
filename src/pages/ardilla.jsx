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
        <Title title="Ardilla | Stackivy" />
        <Description description="The all in one platform for all your financial needs, whether business or personal. We are in the business of helping you achieve your financial goals" />
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
