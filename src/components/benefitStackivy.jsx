import money from "../assets/money.svg";
import consult from "../assets/consult.svg";
import support from "../assets/support.svg";
import train from "../assets/train.svg";


function BenefitStackivy() {
  return (
    <section className="benefit-partner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2 className="text-white">Benefits of partnering with Stackivy</h2>
            <p className="text-white mt-5">Launching a start-up is fun but comes with its fair share of financial challenges. Every transaction counts, whether credit or debit and making the most of every penny is vital. Wouldn't it help if you had a solid financial partner to take on those financial challenges?</p>
          </div>
        </div>
        <div className="mt-9">
          <div className="row justify-content-center animate__animated animate__slideInLeft animate__fast">
            <div className="col-sm-4 mb-3">
              <div className="green-card">
                <img src={money} alt="money" className="img-fluid" />
                <h6 className="my-4">FUNDING</h6>
                <p>Get funding of up to N10,000,000 to help stay on top of financial challenges.</p>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="green-card">
                <img src={support} alt="money" className="img-fluid" width={50} />
                <h6 className="my-4">12/5 SUPPORT</h6>
                <p>You have our attention 12 hours a day 5 times a week. Get free technical and product-related support from our product experts.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2 animate__animated animate__slideInRight animate__fast">
            <div className="col-sm-4 mb-3">
              <div className="green-card">
                <img src={consult} alt="money" className="img-fluid" />
                <h6 className="my-4">FREE CONSULTATION</h6>
                <p>Enjoy free consultation services with our technical experts when you register to be a Stackivy partner.</p>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="green-card">
                <img src={train} alt="money" className="img-fluid" width={47} />
                <h6 className="my-4">TRAINING</h6>
                <p>Get the training required to get the best out of our products and services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitStackivy;
