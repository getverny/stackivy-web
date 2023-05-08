import BudgetFooter from "../components/budgetFooter";
import MobileHeader from "../components/mmHeader";
// import {ReactTitle} from 'react-meta-tags';
import MetaTags from 'react-meta-tags';

function OpenBanking() {
  return (
    <div>
      <MetaTags>
        <title>Open Banking | Stackivy</title>
        <meta name="description" content="Build Better and More Intimate Financial Products" />
        <meta property="og:title" content="Open Banking" />
      </MetaTags>
      {/* <ReactTitle title="Open Banking | Stackivy"/> */}
      <MobileHeader/>
      <BudgetFooter/>
    </div>
  );
}

export default OpenBanking;
