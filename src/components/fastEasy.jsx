import fast from "../assets/fast.svg";
import imp from "../assets/import.svg";

function Fast() {
  return (
    <section className="fast">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={fast} alt="fast" className="img-fluid" />
            <p className="w-75 mt-4 mb-5">At Hargon, we have leveraged the best technology to simplify your loan process, making it faster and easier for you to get the credit you need. All we need you to do is click the button below and follow the steps outlined. Credit has never been more convenient.</p>
            <button
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
            >
              Get Started
            </button>
          </div>
          <div className="col-sm-6 steppings">
            <div className="stepper d-flex flex-column ml-2">
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="digits mb-2">
                    <img src={imp} alt="01" className="img-fluid" width="71px" />
                  </div>
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="">Download App</h5>
                  <p className="lead">Become a user today and start getting as much loans or becoame a merchant and start giving out loans</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="digits mb-2">
                    <img src={imp} alt="01" className="img-fluid" width="71px" />
                  </div>
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="">Create an account</h5>
                  <p className="lead">Become a user today and start getting as much loans or becoame a merchant and start giving out loans</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center desktop">
                  <div className="digits mb-2">
                    <img src={imp} alt="01" className="img-fluid" width="71px" />
                  </div>
                  <div className="line h-100 d-none"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="">Get a Loan</h5>
                  <p style={{paddingTop: "20px"}}>Become a user today and start getting as much loans or becoame a merchant and start giving out loans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fast;
