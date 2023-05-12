import { Description, Title } from "react-head-meta";
import Benefits from "../components/benefits";
import BudgetFooter from "../components/budgetFooter";
import BudgetingHero from "../components/budgetingHero";
import DillaBudget from "../components/dillaBudget";
import Info from "../components/info";
import Header from "../components/navBar";

function Budgeting() {
  return (
    <div>
      <div>
        <Title title="Budgeting tools - Create and Manage Your Budget " />
        <Description description="Use Stackivy's budgeting tools and services to track and control your money efficiently. Stay on top of your financial game." />
      </div>
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
