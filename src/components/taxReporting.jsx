
import tax from "../assets/tax.png";


function TaxReport() {
  return (
    <section className="paylater bg-black">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={tax} alt="manage your finance" className="img-fluid w-100" />
          </div>
          <div className="col-sm-5 mb-3 mt-9">
            <h2 className="text-white">Tax reporting</h2>
            <h6 className="mt-5 text-white">Calculating and paying your company's taxes can be stressful, especially when dealing with countless financial inflows and outflows. On Onwa, we have made it easy. Activate quick, detailed, and correct tax reporting in minutes when you migrate your company's finances to Onwa.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaxReport;
