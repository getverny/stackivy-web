import happy from "../assets/happy.svg";

function NeedHelp() {
  return (
    <section className="needhelp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>Need Help? <img src={happy} alt="happy" className="img-fluid" /></h2>
            <p className="mt-5">We are committed to offering you a unique experience on Stackivy<br/>
            Our customer support team is on standby 24/7 to give you all the support you need.</p>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Reach Out Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeedHelp;
