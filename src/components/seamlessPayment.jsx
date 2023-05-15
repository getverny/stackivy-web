import seamless from "../assets/seamless.svg";
import seam from "../assets/seam.svg";


function Seamless() {
  return (
    <section className="seamless">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <img src={seamless} alt="Seamless payment transaction with Nearly" className="img-fluid" />
            <p className="mt-4 text-white">Logistics expenses can be overwhelming. Tracking and staying on top of them can be so much easier with Onwa. Now you can track your expenses and find areas where improvements are necessary.</p>
          </div>
          <div className="col-sm-6">
            <img src={seam} alt="seamless" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seamless