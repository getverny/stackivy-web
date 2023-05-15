import { Description, Title } from "react-head-meta";
import BePart from "../components/bePart";
import Best from "../components/bestDecision";
import EducationResources from "../components/educationalResources";
import FinHeader from "../components/finHeader";
import FinHero from "../components/finHero";
import FinancialInfo from "../components/financialInfo";
import NoTop from "../components/footerwithoutTop";
import KeedZone from "../components/keedZone";


function FinancialEducation() {
  return (
    <div>
      <div>
        <Title title="Financial Learning Platform - Learn From The Best Financial Minds" />
        <Description description="Learn from the best financial minds and a ton of valuable resources that help to ensure your financial freedom." />
      </div>
      <FinHeader/>
      <FinHero/>
      <EducationResources/>
      <KeedZone/>
      <Best/>
      <BePart/>
      <FinancialInfo/>
      <NoTop/>
    </div>
  );
}

export default FinancialEducation;
