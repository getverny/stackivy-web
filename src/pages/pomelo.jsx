import BudgetFooter from "../components/budgetFooter";
import DoMore from "../components/doMore";
import Info from "../components/info";
import PaymentRest from "../components/paymentRestriction";
import PomeloHeader from "../components/pomeloHeader";


function Pomelo() {
  return (
    <div>
     <PomeloHeader/>
     <PaymentRest/>
     <DoMore/>
     <Info/>
     <BudgetFooter/>
    </div>
  );
}

export default Pomelo;
