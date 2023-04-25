import track from "../assets/track.svg";

function BudgetingHero() {
  return (
    <section className="budgeting">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h2><img src={track} alt="track" className="img-fluid" /> Track and control your money with Stackivy's budgetting tools</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-7 text-center">
            <h6 className="mb-5">Tracking and controlling your finances plays a significant role in wealth building. However, it can be quite challenging, especially when there is a lot you need to do with your money. Fortunately, at Stackivy, we have created a couple of budgeting tools to help you easily manage your finances. Our user-friendly budgeting tools, infused with advanced features, make tracking, controlling, and achieving goals much more fun.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BudgetingHero