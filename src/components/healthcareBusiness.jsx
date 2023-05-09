import hb from "../assets/hb.png";
import icon from "../assets/ones.svg";

function HealthcareBusiness() {
  return (
    <section className="healthcarebusiness">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-9">
            <img src={icon} alt="onescud" className="img-fluid mb-3" />
            <h2>Need <span style={{color: "#17A9A9"}}>custom financial solutions</span> for your healthcare business?</h2>
            <p className="my-5">Every healthcare business has its unique attributes. You can get custom solutions tailored to your unique financial challenges.</p>
            <a
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: '#17A8A8', color: "#fff"}}
            >
              Get your custom application
            </a>
          </div>
          <div className="col-lg-5 offset-md-1 p-0 mt-9">
            <img src={hb} alt="Book keeping" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthcareBusiness