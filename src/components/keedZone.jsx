import children from "../assets/children.svg";

function KeedZone() {
  return (
    <section className="keed">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h3 className="text-white mb-4">Set your kids up for financial success with Stackivy</h3>
            <p className="text-white mb-5">Our learning platform for kids is fun, simple, and impactful. Get your kids started on Stackivy's financial education and watch them grow to enjoy financial success.</p>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to=""
            >
              Keeds Zone
            </button>
            <img src={children} alt="children" className="img-fluid w-100 toppings" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeedZone