import Alt from "../components/alt";
import BWV from "../components/bwv";
import CBHeader from "../components/cbHeader";
import CBHero from "../components/cbHero";
import CrossInfo from "../components/crossInfo";
import NoTop from "../components/footerwithoutTop";
import GoPersonal from "../components/goPersonal";
import Vernde from "../components/vernde";
import WhyVernde from "../components/whyVernde";


function CrossBorder() {
  return (
    <div>
      <CBHeader/>
      <CBHero/>
      <Vernde/>
      <GoPersonal/>
      <Alt/>
      <BWV/>
      <WhyVernde/>
      <CrossInfo/>
      <NoTop/>
    </div>
  );
}

export default CrossBorder;
