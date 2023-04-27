import BudgetFooter from "../components/budgetFooter";
import Info from "../components/info";
import Header from "../components/navBar";
import WealthHero from "../components/wealthHero";

function Wealth() {
  return (
    <div>
      <Header/>
      <WealthHero/>
      <Info/>
      <BudgetFooter/>
    </div>
  );
}

export default Wealth;
