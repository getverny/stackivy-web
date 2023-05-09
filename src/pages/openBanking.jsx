import Access from "../components/access";
import BudgetFooter from "../components/budgetFooter";
import Documentation from "../components/documentation";
import MobileHeader from "../components/mmHeader";
import OpenHero from "../components/openHero";
import SpaceInfo from "../components/spaceInfo";
import Spaycemoon from "../components/spaycemoon";

function OpenBanking() {
  return (
    <div>
      <MobileHeader/>
      <OpenHero/>
      <Access/>
      <Documentation/>
      <Spaycemoon/>
      <SpaceInfo/>
      <div className="bg-black">
        <BudgetFooter/>
      </div>
    </div>
  );
}

export default OpenBanking;
