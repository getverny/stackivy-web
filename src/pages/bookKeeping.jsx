import AutomatedBK from "../components/automatedBk";
import BookHeader from "../components/bookHeader";
import BookHero from "../components/bookHero";
import BookInfo from "../components/bookInfo";
import Expense from "../components/expenseTracking";
import NoTop from "../components/footerwithoutTop";
import Invoicing from "../components/invoicing";
import TaxReport from "../components/taxReporting";



function BookKeep() {
  return (
    <div>
      <BookHeader/>
      <BookHero/>
      <AutomatedBK/>
      <Expense/>
      <Invoicing/>
      <TaxReport/>
      <BookInfo/>
      <NoTop/>
    </div>
  );
}

export default BookKeep;
