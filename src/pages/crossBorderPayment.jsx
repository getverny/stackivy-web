import CBHeader from "../components/cbHeader";
import CBHero from "../components/cbHero";
import CrossInfo from "../components/crossInfo";
import NoTop from "../components/footerwithoutTop";
import Vernde from "../components/vernde";


function CrossBorder() {
  return (
    <div>
      <CBHeader/>
      <CBHero/>
      <Vernde/>
      <CrossInfo/>
      <NoTop/>
    </div>
  );
}

export default CrossBorder;
