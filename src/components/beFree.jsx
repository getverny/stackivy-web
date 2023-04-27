import personal from "../assets/personal.svg";
import flag from "../assets/flag.svg";

function BeFree() {
  return (
    <section className="befree">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src={personal} alt="title" className="img-fluid w-75" />
          </div>
        </div>
        <div className="row mt-9 justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2>Be Financially <span className="track">free</span></h2>
            <p className="my-5">We have helped thousands of users become financially free, and we can help you through our wealth management tools on Ardilla. Learn, save, invest, and get coached through your journey to financial freedom.</p>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              View Ardilla
            </button>
          </div>
          <div className="col-sm-6">
            <img src={flag} alt="flag" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeFree