import EducationResources from "../components/educationalResources";
import FinHeader from "../components/finHeader";
import FinHero from "../components/finHero";
import FinancialInfo from "../components/financialInfo";
import NoTop from "../components/footerwithoutTop";


function FinancialEducation() {
  return (
    <div>
      <FinHeader/>
      <FinHero/>
      <EducationResources/>
      <FinancialInfo/>
      <NoTop/>
    </div>
  );
}

export default FinancialEducation;
