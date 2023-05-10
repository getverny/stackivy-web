import card from "../assets/zettarh.png";
import simply from "../assets/zettarh.svg";


function Zettarh() {
  return (
    <section className="simplified pb-0 zet">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <img src={simply} alt="zettarh" className="img-fluid" />
            <h6 className="mt-5 w-75">Are you looking to build a simple but powerful e-commerce platform? Look no further than Stackivy's open banking platform - Spaycemoon. On Spaycemoon, you have access to millions of financial data across all our financial products, giving you a pool of behavioural data to create or design a unique platform. At Spaycemoon, you have easy integration, Demos, dummy accounts, and variety.</h6>
          </div>
          <div className="col-sm-6">
            <img src={card} alt="card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zettarh;
