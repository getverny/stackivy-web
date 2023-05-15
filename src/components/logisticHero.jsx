
import logistics from "../assets/titlelogistic.svg";
import delivery from "../assets/logistic.svg";

function LogisticHero() {
  return (
    <section className="bg-black logistichero pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mb-3 offset-md-2 p-0">
            <img src={logistics} alt="Simplify your logistics business with the right financial solutions." className="img-fluid" />
            <p className="mt-4 mb-5 text-white">Logistics and transportation is a challenging industry, so why not make it easier with innovative financial solutions that ensure you and your customers get the best results.</p>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4"
              to="" style={{background: "#FACC15", color: "#000"}}
            >
              Get started
            </button>
          </div>
          <div className="col-lg-5 offset-md-1 p-0 lh">
            <img src={delivery} alt="logistics" className="img-fluid w-100 animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogisticHero