import seamless from "../assets/innovative.svg";
import seam from "../assets/finrecord.svg";


function Innovative() {
  return (
    <section className="inno">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <img src={seamless} alt="Innovative financial records" className="img-fluid" />
            <p className="mt-4">Logistics expenses can be overwhelming. Tracking and staying on top of them can be so much easier with Onwa. Now you can track your expenses and find areas where improvements are necessary.</p>
            <p className="mt-3">With so much inflow and outflow in the logistics business, keeping accurate inflow and outflow can be stressful. However, using Onwa enables you to manage financial inflows and outflows with tools like invoicing, financial reporting, and tax reporting.</p>
          </div>
          <div className="col-sm-6">
            <img src={seam} alt="seamless" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovative