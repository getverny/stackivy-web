import { Description, Title } from "react-head-meta";
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
       <div>
        <Title title="Wealth Management - Save and Invest with Ardilla" />
        <Description description="Build and manage wealth using saving and investing financial tools giving your wealth goals the variety it needs." />
      </div>
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
