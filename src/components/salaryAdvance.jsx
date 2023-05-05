import plus from "../assets/salary.svg";
import quick from "../assets/sa.svg";



function SalaryAdvance() {
  return (
    <section className="quickloan bg-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-4 mt-9">
            <img src={quick} alt="buynow" className="img-fluid mb-5" />
            <h6 className="w-75">Are you a working professional looking for an advance on your salary? We have several options for you at very little interest rates. We are the convenient and cheap option.</h6>
          </div>
          <div className="col-sm-7">
            <img src={plus} alt="buynow" className="img-fluid w-100" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default SalaryAdvance;
