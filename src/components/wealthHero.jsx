import wealth from "../assets/wealthimg.svg";

function WealthHero() {
  return (
    <section className="wealthhero">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2 className="text-white">Manage your <span className="track">wealth</span></h2>
            <p className="my-5 text-white">Building wealth is a process that begins with managing your finance, and no one does it like Stackivy. At Stackivy, we provide financial tools such as GRIT, VAULT, DIB, and many others, giving you the variety you need to get started building the wealth you deserve.</p>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#000"}}
            >
               Start building wealth
            </button>
          </div>
          <div className="col-sm-6">
            <img src={wealth} alt="wealth" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WealthHero