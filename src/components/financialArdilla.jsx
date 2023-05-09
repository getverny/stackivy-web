import title from "../assets/financial.svg";
import fmr from "../assets/fmr.svg";
import tc from "../assets/tc.svg";


function FinancialArdilla() {
  return (
    <section className="fin-ard">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={title} alt="Financial Management With Ardilla" className="img-fluid" />
            <p className="mt-2">Our intuitive financial management platform ensures nothing stops you or your business from achieving its financial goals. On Ardilla, you can leverage AI tools and consultation with Experts to identify guidelines and potential goldmines to explore in the growth and expansion of your business.</p>
          </div>
        </div>
        <div className="row justify-content-between toppings">
          <div className="col-sm-5 mb-3 fin-ard-top">
            <h3>Manage employee benefits</h3>
            <p className="mt-3">Your employees are the backbone of your business, and we understand it. That is why we have created an employee management portal that allows you to make salary and bonus payments even when your company lacks the funds.</p>
          </div>
          <div className="col-sm-5">
            <img src={fmr} alt="fmr" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-between toppings">
          <div className="col-sm-5">
            <img src={tc} alt="fmr" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 fin-ard-top">
            <h3>Track and Control your company’s investments in one platform.</h3>
            <p className="mt-3">With Ardilla, you never have to invest blindly. Your business can now explore well-vetted investment opportunities that ensure returns.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default FinancialArdilla