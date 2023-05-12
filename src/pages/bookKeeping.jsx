import { Description, Title } from "react-head-meta";
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
      <div>
        <Title title="Book keeping - Automated Financial Accounting" />
        <Description description="With Ardilla, you can access financial tools and services that help you build wealth and achieve financial freedom" />
      </div>
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
