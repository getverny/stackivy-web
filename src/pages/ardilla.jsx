import ArdillaHero from "../components/ardillaHero.";
import ArdillaHeader from "../components/ardillaNavbar";
import NoTop from "../components/footerwithoutTop";

function Ardilla() {
  return (
    <div>
      <ArdillaHeader/>
      <ArdillaHero/>
      <NoTop/>
    </div>
  );
}

export default Ardilla;
