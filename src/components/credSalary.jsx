import foot from "../assets/hardesk.svg";
import credit from "../assets/credit.svg";
import pay from "../assets/pay.svg";
import hargon from "../assets/har.png";



function CredSalary() {
  return (
    <section className="credsalary">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-9">
            <h2 className="text-white">Hargon</h2>
            <p className="text-white mt-4">Effectively manage the financial benefits of your staff, with Hargon. We made it user friendly and robust so that it can capture complex payment systems while simplifying the payment process</p>
          </div>
          <div className="col-sm-5">
            <img src={hargon} alt="hargon" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-9">
          <div className="col">
            <img src={foot} alt="dashboard" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 mb-3">
            <div className="hr-card bg-white">
              <img src={credit} alt="credit" className="img-fluid" />
              <h3 className="my-5"><span className="track">Credit</span> for<br/>Staff Salary</h3>
              <p>Are you finding it difficult to pay your staff? With Onscurd, you have access to credit that helps you pay your staff on time and complete. Ensuring they stay motivated</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="hr-card bg-white">
              <img src={pay} alt="credit" className="img-fluid" />
              <h3 className="my-5"><span className="track">Pay</span> as you<br/>work</h3>
              <p>Implement a pay-as-you-work system where tasks are assigned to your staff periodically. The system also tracks and pays according to the percentage of work completed to ensure you get the best from your team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CredSalary