import Benefits from "../components/benefits";
import BudgetFooter from "../components/budgetFooter";
import BudgetingHero from "../components/budgetingHero";
import DillaBudget from "../components/dillaBudget";
import Info from "../components/info";
import Header from "../components/navBar";

function Budgeting() {
  return (
    <div>
      <Header/>
      <BudgetingHero/>
      <DillaBudget/>
      <Benefits/>
      <Info/>
      <BudgetFooter/>
    </div>
  );
}

export default Budgeting;
