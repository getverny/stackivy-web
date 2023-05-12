import liner from "../assets/hargonline.svg"
import userdashboard from "../assets/hargondash.svg"


function HargonHero() {
  return (
    <section className="hargon-hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 mt-9">
            <span><img src={liner} alt="liner" className="img-fluid" style={{marginRight: "15px", marginTop: "-3px"}} /> Hargon</span>
            <h1 className="mt-4">Credit anywhere, anytime </h1>
            <h6 className="w-75 my-5">Hargon is your favourite credit partner, offering credit solutions to fund your personal or business needs. From fast processing times to competitive interest rates, Hargon has simplified credit, making it readily available whenever and wherever you need it.</h6>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#228922"}}
            >
              Get Started On Hargon
            </button>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={userdashboard} alt="userdashboard" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HargonHero;
