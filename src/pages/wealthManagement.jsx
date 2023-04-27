import BeFree from "../components/beFree";
import BudgetFooter from "../components/budgetFooter";
import Info from "../components/info";
import InvestmentSecurity from "../components/investmentSecurity";
import Linear from "../components/linear";
import Header from "../components/navBar";
import PlanRetire from "../components/planRetire";
import Stock from "../components/stock";
import WealthHero from "../components/wealthHero";
import WhyInvestment from "../components/whyInvestment";

function Wealth() {
  return (
    <div>
      <Header/>
      <WealthHero/>
      <BeFree/>
      <PlanRetire/>
      <Linear/>
      <InvestmentSecurity/>
      <Stock/>
      <WhyInvestment/>
      <Info/>
      <BudgetFooter/>
    </div>
  );
}

export default Wealth;
