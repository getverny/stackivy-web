import eloan from "../assets/eloan.svg";



function EmployeeLoan() {
  return (
    <section className="employeeloan">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mt-9 mb-2">
            <h2 className="mb-4">Employee<br/><span className="cred">loans</span></h2>
            <p>Happy staff, happy business. Are you having issues meeting up with your salary obligation to your staff? Take a salary credit from us today and ensure your staff members are happy and motivated to give you their best.</p>
          </div>
          <div className="col-sm-6">
            <img src={eloan} alt="eloan" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeLoan;
