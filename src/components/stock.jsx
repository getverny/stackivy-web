import check from "../assets/stock.svg";

function Stock() {
  return (
    <section className="befree plan-retire">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <img src={check} alt="flag" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6">
            <h2>Simplify Company Finances with Our <span className="track">Stock Platform</span></h2>
            <p className="my-5">Plan your company's finances. Sell and buy back your company's stocks through our robust and user-friendly platform. It is easy, convenient, and flexible for your shareholders.</p>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stock