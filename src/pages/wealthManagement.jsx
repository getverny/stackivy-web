import BeFree from "../components/beFree";
import BudgetFooter from "../components/budgetFooter";
import Info from "../components/info";
import Linear from "../components/linear";
import Header from "../components/navBar";
import PlanRetire from "../components/planRetire";
import WealthHero from "../components/wealthHero";

function Wealth() {
  return (
    <div>
      <Header/>
      <WealthHero/>
      <BeFree/>
      <PlanRetire/>
      <Linear/>
      <Info/>
      <BudgetFooter/>
    </div>
  );
}

export default Wealth;
