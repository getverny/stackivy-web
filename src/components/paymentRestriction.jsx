import gadget from "../assets/gadgets.svg";


function PaymentRest() {
  return (
    <section className="paymentrest">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-9">
            <h2>Payment without <span className="pr">restrictions</span></h2>
            <p className="mt-4 w-50">Send, Recieve, and Make payments with all types of devices from anywhere at anytime.</p>
          </div>
        </div>
        <div className="row-fluid mt-4">
          <div className="col">
            <img src={gadget} alt="gadget" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentRest;
