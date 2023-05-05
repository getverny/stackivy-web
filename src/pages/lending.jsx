import BuyNow from "../components/buyNow";
import EmployeeLoan from "../components/employeeLoan";
import Footer from "../components/footer";
import GrowBusiness from "../components/growBusiness";
import Info from "../components/info";
import LendingHero from "../components/leadingHero";
import Header from "../components/navBar";
import QuickLoan from "../components/quickLoan";
import SalaryAdvance from "../components/salaryAdvance";
import ServeCustomers from "../components/serveCustomers";




function Lending() {
  return (
    <div>
      <Header/>
      <LendingHero/>
      <BuyNow/>
      <QuickLoan/>
      <SalaryAdvance/>
      <GrowBusiness/>
      <ServeCustomers/>
      <EmployeeLoan/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default Lending;
