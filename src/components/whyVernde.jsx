import one from "../assets/one.svg";
import tuu from "../assets/tuu.svg";
import tiree from "../assets/tiree.svg";
import fore from "../assets/fore.svg";

function WhyVernde() {
  return (
    <section className="whyvernde">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-4">
            <h3>Why Vernde?</h3>
            <p className="text-white">Vernde's well-documented APIs allow you to create custom payment experiences that are tailored to your customers' needs. From checkout pages to mobile apps, you can build a seamless payment experience </p>
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-6 mb-3">
                <img src={one} alt="icon" className="img-fluid" />  
                <h6 className="text-white my-4">Business Transaction</h6>       
                <p className="text-white">Send or receive bulk payments for your business across Africa.</p>       
              </div>
              <div className="col-sm-6 mb-3">
                <img src={tuu} alt="icon" className="img-fluid" />  
                <h6 className="text-white my-4">Airtime TopUp</h6>       
                <p className="text-white">Send or receive bulk payments for your business across Africa.</p>       
              </div>
            </div>
            <div className="row mt-9">
              <div className="col-sm-6 mb-3">
                <img src={tiree} alt="icon" className="img-fluid" />  
                <h6 className="text-white my-4">School Fees</h6>       
                <p className="text-white">Use the CBN rates to pay school fees for your loved ones from the comfort of your home.</p>       
              </div>
              <div className="col-sm-6 mb-3">
                <img src={fore} alt="icon" className="img-fluid" />  
                <h6 className="text-white my-4">Jobs</h6>       
                <p className="text-white">Get paid on Vernde for your international jobs</p>       
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyVernde