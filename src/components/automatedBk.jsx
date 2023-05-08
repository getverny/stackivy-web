import diamond from "../assets/auto1.svg"
import two from "../assets/auto2.svg"
import three from "../assets/auto3.svg"
import four from "../assets/auto4.svg"
import five from "../assets/auto5.svg"


function AutomatedBK() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h3 className="mb-4">Automated Bookeeping</h3>
            <p>On Stackivy's Onwa, you do not have to worry about wrong reporting, mistakes, or delays with your company's bookkeeping. Our automated bookkeeping platform is user-friendly, secure and records your company's financial transactions in real time.</p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col mb-3">
            <div className="auto-cards text-center">
              <img src={diamond} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Set Reminders</h4>
            </div>
          </div>
          <div className="col mb-3">
            <div className="auto-cards text-center">
              <img src={two} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Notifications</h4>
            </div>
          </div>
          <div className="col mb-3">
            <div className="auto-cards text-center">
              <img src={three} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Instant Invoices</h4>
            </div>
          </div>
          <div className="col mb-3">
            <div className="auto-cards text-center">
              <img src={four} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Performance Report</h4>
            </div>
          </div>
          <div className="col mb-3">
            <div className="auto-cards text-center">
              <img src={five} alt="diamond" className="img-fluid" width={60}/>
              <h4 className="mt-4">Company Analytics</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutomatedBK;
