import gadget from "../assets/gadgets.png";

function PaymentRest() {
  return (
    <section className="paymentrest pb-0 pe-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-9">
            <h2>Payment without <span className="pr">restrictions</span></h2>
            <p className="mt-4 w-50">Send, Recieve, and Make payments with all types of devices from anywhere at anytime.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row mt-4 justify-content-end">
          <div className="col-sm-11 text-end">
            <img src={gadget} alt="gadget" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentRest;
