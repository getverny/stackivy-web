import collect from "../assets/collections.svg";


function EcommerceHero() {
  return (
    <section className="ecoommerce-hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 mb-3">
            <h2 className="animate__animated animate__slideInDown animate__fast"><span className="track">E-commerce</span><br/>Solution</h2>
            <h6 className="my-5 w-75">We have a host of financial products designed to get the best out of your e-commerce platform and help give your customers the rich experience they deserve.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Get started
            </button>
          </div>
          <div className="col-sm-6">
            <img src={collect} alt="doctor" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcommerceHero;
