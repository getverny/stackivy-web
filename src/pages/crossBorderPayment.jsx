import CBHeader from "../components/cbHeader";
import CBHero from "../components/cbHero";
import CrossInfo from "../components/crossInfo";
import NoTop from "../components/footerwithoutTop";
import GoPersonal from "../components/goPersonal";
import Vernde from "../components/vernde";


function CrossBorder() {
  return (
    <div>
      <CBHeader/>
      <CBHero/>
      <Vernde/>
      <GoPersonal/>
      <CrossInfo/>
      <NoTop/>
    </div>
  );
}

export default CrossBorder;
