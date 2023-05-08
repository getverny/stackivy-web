
import manage from "../assets/scg.svg";
import fm from "../assets/fmsc.svg";


function Strategy() {
  return (
    <section className="paylater">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={manage} alt="manage your finance" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-9">
            <img src={fm} alt="manage your finance" className="img-fluid" />
            <h6 className="my-5">Manage your financial system with ease on Stackivy's Onescurd. Get great insights and financial tips to help navigate and control your company's finances.</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
