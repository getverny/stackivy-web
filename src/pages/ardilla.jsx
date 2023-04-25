import ArdillaHero from "../components/ardillaHero.";
import ArdillaHeader from "../components/ardillaNavbar";
import FinancialCoaching from "../components/financialCoaching";
import NoTop from "../components/footerwithoutTop";

function Ardilla() {
  return (
    <div>
      <ArdillaHeader/>
      <ArdillaHero/>
      <FinancialCoaching/>
      <NoTop/>
    </div>
  );
}

export default Ardilla;
