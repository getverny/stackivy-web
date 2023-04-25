import ArdillaHero from "../components/ardillaHero.";
import ArdillaHeader from "../components/ardillaNavbar";
import FinancialCoaching from "../components/financialCoaching";
import NoTop from "../components/footerwithoutTop";
import SavePace from "../components/savePace";
import Traction from "../components/traction";

function Ardilla() {
  return (
    <div>
      <ArdillaHeader/>
      <ArdillaHero/>
      <FinancialCoaching/>
      <SavePace/>
      <Traction/>
      <NoTop/>
    </div>
  );
}

export default Ardilla;
