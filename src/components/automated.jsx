
import custom from "../assets/auto.svg";


function Automated() {
  return (
    <section className="automated pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <h2>Automated Financial Reporting</h2>
            <h6 className="my-5">Onescurd provides insightful weekly, monthly, and yearly automated financial reporting on your company's financial progress. You also get an analysis of the implementation of your custom financial solutions.</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <img src={custom} alt="custommade" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Automated;
