import loan from "../assets/loan.svg";

function LoanInterest() {
  return (
    <section className="loan-interest">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3" style={{marginTop: "120px"}}>
            <h6 className="text-white">Rates</h6>
            <h2 className="text-white">Lower Interest rates</h2>
            <p className="text-white mb-5">With Hargon, you have lower interest rates than you are used to because we value your success and know that huge interest loans can sometimes make it difficult. We offer lower interest to help you take on that financial challenge successfully.</p>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#228922"}}
            >
              Get Started
            </button>
          </div>
          <div className="col-sm-6">
            <img src={loan} alt="loan-interest" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoanInterest