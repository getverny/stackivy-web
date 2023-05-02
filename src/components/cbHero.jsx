import wealth from "../assets/crossimg.svg";

function CBHero() {
  return (
    <section className="cbhero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-9">
            <h2>Break the international barriers on your money <span className="cb">with Stackivy's Vernde.</span></h2>
            <p className="my-5">Receive, send, and make payments across Africa easily and in record time without worrying about hidden charges.</p>
            <a
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #FF6648 -13.79%, #FFF96A 131.52%)', color: "#fff"}}
            >
              Start Transacting
            </a>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={wealth} alt="wealth" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CBHero