import Experience from "../components/experience";
import FAQSupport from "../components/faqSupport";
import NoTop from "../components/footerwithoutTop";
import Header from "../components/navBar";
import NeedHelp from "../components/needHelp";
import StackivyCommunity from "../components/stackivyCommunity";

function Supports() {
  return (
    <div>
      <Header/>
      <NeedHelp/>
      <StackivyCommunity/>
      <Experience/>
      <FAQSupport/>
      <NoTop/>
    </div>
  );
}

export default Supports;
