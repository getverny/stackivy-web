import AboutFooter from "../components/aboutFooter";
import AboutHero from "../components/aboutHero";
import Mission from "../components/mission";
import Header from "../components/navBar";
import OurGoal from "../components/ourGoal";
import VisionStatement from "../components/visionStatement";

function AboutUs() {
  return (
    <div>
      <Header/>
      <AboutHero/>
      <Mission/>
      <VisionStatement/>
      <OurGoal/>
      <AboutFooter/>
    </div>
  );
}

export default AboutUs;
