import wealth from "../assets/bookhero.png";
import icon from "../assets/icon.svg";
function BookHero() {
  return (
    <section className="bookhero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0 mt-9">
            <h2>Unleash the Power of <span style={{color: "#EF9600"}}>Automated Financial Accounting</span></h2>
            <p className="my-5">Track, control, and manage your company's finances in real time<br/>on Stackivy's Onwa.<img src={icon} alt="onwa" className="img-fluid" style={{marginTop: "-13px"}}/></p>
            <a
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              href="#startbuilding" style={{background: '#FFA000', color: "#fff"}}
            >
              Get Started
            </a>
          </div>
          <div className="col-lg-5 offset-md-1 p-0">
            <img src={wealth} alt="Book keeping" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookHero