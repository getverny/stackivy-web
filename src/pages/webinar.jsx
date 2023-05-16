import BeSpeaker from "../components/beSpeaker";
import BuildingSus from "../components/buildingSustainable";
import Footer from "../components/footer";
import Upcoming from "../components/upcomingEvents";
function Webinar() {
  return (
    <div>
      <BuildingSus/>
      <Upcoming/>
      <BeSpeaker/>
      <Footer/>
    </div>
  );
}

export default Webinar;
