import BudgetFooter from "../components/budgetFooter";
import DoMore from "../components/doMore";
import Info from "../components/info";
import PaymentRest from "../components/paymentRestriction";
import PomeloHeader from "../components/pomeloHeader";
import PomeloHero from "../components/pomeloHero";


function Pomelo() {
  return (
    <div>
     <PomeloHeader/>
     <PomeloHero/>
     <PaymentRest/>
     <DoMore/>
     <Info/>
     <BudgetFooter/>
    </div>
  );
}

export default Pomelo;
