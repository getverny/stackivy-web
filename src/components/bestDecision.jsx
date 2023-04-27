import children from "../assets/2phones.svg";

function Best() {
  return (
    <section className="bestdecision">
      <div className="container">
        <div className="row">
          <div className="col-sm-11">
            <h3 className="text-white mb-4 w-75">Make the best decision for your money. Take advantage of our financial experts.</h3>
            <p className="text-white mb-5 w-75">Tap into our network of financial experts as you get started on your search for financial freedom for an amazing ride</p>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to=""
            >
              Create an Account
            </button>
            <img src={children} alt="children" className="img-fluid w-100 toppings" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Best