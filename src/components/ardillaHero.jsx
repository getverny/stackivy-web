import liner from "../assets/hargonline.svg"
import userdashboard from "../assets/ardhero.png"

function ArdillaHero() {
  return (
    <section className="ardilla-hero pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2">
            <span><img src={liner} alt="liner" className="img-fluid" style={{marginRight: "15px", marginTop: "-3px"}} /> ARDILLA</span>
            <h1 className="mt-4">Your Access To More</h1>
            <h6 className="w-75 my-5">Ready to take your finance to the next level? Our wealth management platform is designed with tools such as saving, investing, budgeting, and financial tips to help you develop and improve habits that guarantee your financial freedom.</h6>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#000"}}
            >
              Join Ardilla, start building wealth
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

export default ArdillaHero;
