import check from "../assets/check.svg";

function PlanRetire() {
  return (
    <section className="befree plan-retire">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <img src={check} alt="flag" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-5">
            <h2>Plan your<br/><span className="track">Retirement</span></h2>
            <p className="my-5">The future is just around the corner, so is 65. There will never be a better time to start planning for your retirement, so why not kick-start your retirement plan right now with stackivy? We have made it easy, fun, and way more interesting with amazing rewards.</p>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Start planning
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanRetire