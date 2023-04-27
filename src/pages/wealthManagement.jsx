import BeFree from "../components/beFree";
import BudgetFooter from "../components/budgetFooter";
import Info from "../components/info";
import Header from "../components/navBar";
import WealthHero from "../components/wealthHero";

function Wealth() {
  return (
    <div>
      <Header/>
      <WealthHero/>
      <BeFree/>
      <Info/>
      <BudgetFooter/>
    </div>
  );
}

export default Wealth;
