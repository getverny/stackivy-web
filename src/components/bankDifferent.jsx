import curve from "../assets/curve.svg";
import phones from "../assets/2phones.png";


function BankDifferent() {
  return (
    <section className="simplified bankdiff">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={phones} alt="card" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-9">
            <img src={curve} alt="Bank Different With Curved" className="img-fluid" />
            <h6 className="mt-5">Are you looking to build a simple but powerful e-commerce platform? Look no further than Stackivy's open banking platform - Spaycemoon. On Spaycemoon, you have access to millions of financial data across all our financial products, giving you a pool of behavioural data to create or design a unique platform. At Spaycemoon, you have easy integration, Demos, dummy accounts, and variety.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankDifferent;
