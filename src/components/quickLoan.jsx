import plus from "../assets/plus.svg";
import quick from "../assets/quickloans.svg";



function QuickLoan() {
  return (
    <section className="quickloan">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-7">
            <img src={plus} alt="buynow" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 toppings text-center">
            <img src={quick} alt="buynow" className="img-fluid mb-5" />
            <h6>Need urgent 2k to get out of a fix? We understand emergencies at Stackivy. That is why we have made emergency credit solutions on any of our lending platforms to get that quick loan you need.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickLoan;
