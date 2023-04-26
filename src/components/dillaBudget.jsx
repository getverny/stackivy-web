import phonedilla from "../assets/phone.svg";
import hargon from "../assets/fone.svg";

function DillaBudget() {
  return (
    <section className="dillabudget">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="dilla-cards shadow">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <h3 className="mb-3 text-white">Dilla Budget</h3>
                  <p className="text-white mb-5">Dilla Budget works with our wealth management platform - Ardilla, to give you a personalized experience which helps you monitor expenses, allocate money for savings and investment, and track your progress.</p>
                  <button
                    className="btn btn-primary btn-fff rounded-pill px-5 py-4"
                    to="" style={{color: "#8807F7"}}
                  >
                    Explore now
                  </button>
                </div>
                <div className="col-sm-6">
                  <img src={phonedilla} alt="dilla" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12">
            <div className="dilla-cards hargonbg">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <h3 className="mb-3 text-white">Hargon Budget</h3>
                  <p className="text-white mb-5">Hargon Budget works with our credit platform to help you track and control your expenses, utilize credit, and allocate loan payment amounts. Our Hargon budget enables you to utilize credit/loans to ensure it works for you.</p>
                  <button
                    className="btn btn-primary btn-fff rounded-pill px-5 py-4"
                    to="" style={{color: "#228922"}}
                  >
                    Explore now
                  </button>
                </div>
                <div className="col-sm-6">
                  <img src={hargon} alt="hargon" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DillaBudget