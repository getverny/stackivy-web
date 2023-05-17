import CreditWealth from "../components/creditWealth";
import Footer from "../components/footer";
import KeedArdilla from "../components/keedArdilla";
import Header from "../components/navBar";
import PaymentSolution from "../components/paymentSolution";
import ProductHero from "../components/productIntegrationHero";
import TailoredFinancial from "../components/tailoredFinancial";


function ProductIntegration() {
  return (
    <div>
      <Header/>
      <ProductHero/>
      <CreditWealth/>
      <PaymentSolution/>
      <TailoredFinancial/>
      <KeedArdilla/>
      <Footer/>
    </div>
  );
}

export default ProductIntegration;
