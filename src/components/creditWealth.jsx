import laptop from "../assets/now.png";


function CreditWealth() {
  return (
    <section className="paysolution pb-0 credwealth pe-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <span className="pay-ment"><span className="track">Credit and Wealth Management Solutions</span></span>
            <h2 className="mt-4 track">Hargon + Curved + Ardilla 
            +Nearly + Onwa</h2>
            <p className="mt-4 text-black">Enjoy quick and seamless financial assistance through a plethora of credit and financial management solutions Every business relies on funds and proper management of funds to thrive. We offer your business jaw-dropping credit solutions and expert financial analysis that empowers you and your business to succeed in an ever-strenuous economy.</p>
          </div>
          <div className="col-sm-5 toppings">
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid pe-0">
        <div className="row toppings justify-content-end">
          <div className="col-sm-9">
            <img src={laptop} alt="laptop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditWealth;
