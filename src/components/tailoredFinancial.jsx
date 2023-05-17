import laptop from "../assets/onespace.png";


function TailoredFinancial() {
  return (
    <section className="tailored">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h4 className="text-white">Tailored Financial Solutions</h4>
            <h2 className="mt-4 text-white">Spaycemoon + Onescud</h2>
            <p className="text-white mt-4">Build or develop tailored financial solutions that match your specific needs. Not all businesses have the same need, and we get that. That is why your business or fintech has the option of building or developing unique financial products tailored to your specific needs.</p>
            {/* <img src={laptop} alt="laptop" className="img-fluid" /> */}
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <img src={laptop} alt="laptop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TailoredFinancial;
