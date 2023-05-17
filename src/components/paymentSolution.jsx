import laptop from "../assets/many.png";


function PaymentSolution() {
  return (
    <section className="paysolution bg-white pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 toppings">
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Explore Now
            </button>
          </div>
          <div className="col-sm-6 text-end">
            <span className="pay-ment">PAYMENT SOLUTIONS</span>
            <h2 className="mt-4 track">Pomelo + Vernde + Curved + Nearly + zetarrh</h2>
            <p className="mt-4 text-black">Take advantage of customer-friendly and multi-facing payment solutions that ensure every stakeholder's rich experience. E-commerce businesses are increasingly popular, and 27% of the population are digital shoppers. Don't you think your business and customers deserve a good experience? We do, and we backed it up. Now you can enjoy payment solutions that guarantee simplified international and local payments.</p>
          </div>
        </div>
        <div className="row toppings">
          <div className="col">
            <img src={laptop} alt="laptop" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSolution;
