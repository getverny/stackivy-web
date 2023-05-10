import hb from "../assets/onessss.svg";
import icon from "../assets/your.svg";

function YourOnescud() {
  return (
    <section className="youronescud">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-9">
            <img src={icon} alt="Your e-commerce, Your onescud" className="img-fluid" />
            <p className="mt-5 text-white w-50">Need a little bit of everything or a custom solution? We have you covered. At Stackivy, you can get customized financial solutions tailored to your e-commerce needs.</p>
            <a
              className="btn btn-primary btn-000 rounded-pill px-5 py-4 mt-9"
              href="#!" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Get your custom application
            </a>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={hb} alt="Book keeping" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourOnescud