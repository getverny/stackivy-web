import foot from "../assets/sdesk.svg";
import credit from "../assets/rs.svg";
import pay from "../assets/cb.svg";
import onescurd from "../assets/onescurd.png";
import one from "../assets/ddd.svg";



function WhyOne() {
  return (
    <section className="credsalary onscurd">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={onescurd} alt="hargon" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-9">
            <img src={one} alt="Onescurd" className="img-fluid" />
            <p className="mt-4">Effective human resources can take many forms, and every business has unique challenges with its human resource management. With onscurd, you have tailored solutions for your unique human resource challenges.</p>
            <div className="mt-5">
              <h4 className="scur">Why Onscud?</h4>
              <p className="mt-4">There are so many benefits to using onscurd in your human resource management.</p>
            </div>
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
              <h3 className="my-5"><span className="scur">Salary</span><br/>research</h3>
              <p>Onscurd helps you conduct comprehensive salary research that ensures you are paying your staff the market rate, ensuring they are always motivated and less reluctant to leave.</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="hr-card bg-white">
              <img src={pay} alt="credit" className="img-fluid" />
              <h3 className="my-5"><span className="scur">Bonus</span><br/>calculation</h3>
              <p>Calculate and process the correct bonus amounts for each of your staff members, ensuring everyone gets what they deserve.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOne