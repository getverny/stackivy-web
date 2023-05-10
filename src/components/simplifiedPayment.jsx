import card from "../assets/cards.svg";
import simply from "../assets/simple.svg";


function SimplifiedPayment() {
  return (
    <section className="simplified pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={simply} alt="doctor" className="img-fluid" />
            <h6 className="mt-5 w-75">Stackivy's innovative payment gateway solution enhances the financial transactions between businesses and owners, whether online or in-store. Say goodbye to long queues and terrible payment options that leave you and your customers desiring more.Pomelo works seamlessly with credit cards and mobile payments.Get started Integrating Pomelo</h6>
          </div>
          <div className="col-sm-6">
            <img src={card} alt="card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimplifiedPayment;
