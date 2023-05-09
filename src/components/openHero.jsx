import build from "../assets/buildbetter.svg";
import code from "../assets/code.svg";

function OpenHero() {
  return (
    <section className="openhero">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <img src={build} alt="Build Better" className="img-fluid animate__animated animate__slideInDown animate__fast" />
            <p className="text-white mb-5">Give your customers a secure and personalized banking experience with Stackivy's open banking API platform- Spaceymoon.</p>
            <a
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: '#245FE0', color: "#fff"}}
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="row justify-content-between topspace">
          <div className="col-sm-5">
            <img src={code} alt="api" className="img-fluid animate__animated animate__slideInLeft animate__fast" />
          </div>
          <div className="col-sm-5 mt-9">
            <h2 className="text-white">Integrate</h2>
            <p className="mt-5 text-white">Are you building the next great financial solution? Integrate your mobile and web application with our open banking API and facilitate dummy transactions that help you create the ideal financial solutions. We would love to help.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenHero