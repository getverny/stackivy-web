import Benefits from "../components/benefits";
import BudgetingHero from "../components/budgetingHero";
import DillaBudget from "../components/dillaBudget";
import Footer from "../components/footer";
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
      <Footer/>
    </div>
  );
}

export default Budgeting;
