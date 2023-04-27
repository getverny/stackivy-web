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
