import card from "../assets/circle.png";
import build from "../assets/buildand.svg";


function BuildIntegrate() {
  return (
    <section className="buildintegrate">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <img src={build} alt="Build and integrate with SpaycemOOn" className="img-fluid" />
            <h6 className="mt-5 text-white w-75">Are you looking to build a simple but powerful e-commerce platform? Look no further than Stackivy's open banking platform - Spaycemoon. On Spaycemoon, you have access to millions of financial data across all our financial products, giving you a pool of behavioural data to create or design a unique platform. At Spaycemoon, you have easy integration, Demos, dummy accounts, and variety. Start building with Spaycemoon</h6>
          </div>
          <div className="col-sm-6">
            <img src={card} alt="card" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildIntegrate;
