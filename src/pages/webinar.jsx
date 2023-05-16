import BeSpeaker from "../components/beSpeaker";
import BuildingSus from "../components/buildingSustainable";
import Footer from "../components/footer";
import PastWebinar from "../components/pastWebinar";
import Upcoming from "../components/upcomingEvents";
import WebHeader from "../components/webHeader";
import WebinarHero from "../components/webinarHero";
function Webinar() {
  return (
    <div>
      <WebHeader/>
      <WebinarHero/>
      <PastWebinar/>
      <BuildingSus/>
      <Upcoming/>
      <BeSpeaker/>
      <Footer/>
    </div>
  );
}

export default Webinar;
