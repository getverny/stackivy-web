import doctor from "../assets/doctor.png";


function HealthHero() {
  return (
    <section className="health-hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <h2 className="animate__animated animate__slideInDown animate__fast"><span style={{color: "#2563EB"}}>Healthcare</span><br/>solutions</h2>
            <h6 className="mt-5">Stackivy's financial solutions cater to small and medium businesses in the health sector looking for robust financial solutions that can help them expand and serve customers better.</h6>
            <h6 className="mt-3 mb-5" style={{color: "#2563EB"}}>Is that your business? We have some financial solutions for you.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: '#2563EB'}}
            >
              Get started
            </button>
          </div>
          <div className="col-sm-6">
            <img src={doctor} alt="doctor" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthHero;
