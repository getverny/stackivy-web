import Benefits from "../components/benefits";
import BudgetingHero from "../components/budgetingHero";
import DillaBudget from "../components/dillaBudget";
import Footer from "../components/footer";
import Header from "../components/navBar";

function Budgeting() {
  return (
    <div>
      <Header/>
      <BudgetingHero/>
      <DillaBudget/>
      <Benefits/>
      <Footer/>
    </div>
  );
}

export default Budgeting;
