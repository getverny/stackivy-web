import FoodCredit from "../components/foodCredit";
import FoodHeader from "../components/foodHeader";
import FoodHero from "../components/foodHero";
import Footer from "../components/footer";
import MobileFood from "../components/mobileFood";
import MobileInfo from "../components/mobileInfo";




function Food() {
  return (
    <div>
      <FoodHeader/>
      <FoodHero/>
      <FoodCredit/>
      <MobileFood/>
      <MobileInfo/>
      <Footer/>
    </div>
  );
}

export default Food;
