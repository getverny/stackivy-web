import desktop from "../assets/desktop.svg";

function Hero() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h1><span className="all-in-one">All In One,</span> All your Financial Needs</h1>
            <h6 className="my-5">The one stop platform for all your financial needs</h6>
            <button className="btn btn-primary btn-main rounded-pill px-5 py-3">Get Started</button>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: "50px"}}>
          <div className="col-md-10 text-center">
            <img src={desktop} alt="desktop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero