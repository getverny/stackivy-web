import personal from "../assets/bper.svg";
import buynow from "../assets/buynow.svg";
import plan from "../assets/plan.svg";


function BuyNow() {
  return (
    <section className="paylater">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={personal} alt="personal" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-sm-5 mt-9">
            <img src={buynow} alt="buynow" className="img-fluid mb-5" style={{marginLeft: "-22px"}} />
            <h6 className="w-75">Do you need a new gadget, groceries, clothes, or cool tools but cannot pay now? You can buy whatever you want from Stackivy's business hub on Hargon and pay later. No hidden charges or excessive rates.</h6>
          </div>
          <div className="col-sm-6">
          <img src={plan} alt="repayment" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyNow;
