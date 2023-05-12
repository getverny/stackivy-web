import { Description, Title } from "react-head-meta";
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
      <div>
        <Title title="Cross-border payment - Break International Barriers " />
        <Description description="Use our cross-border payment platform to facilitate international transactions without limits." />
      </div>
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
