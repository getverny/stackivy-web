import growth from "../assets/growth.png";
import user from "../assets/user.png";
import free from "../assets/free-access.png";
import work from "../assets/work-life.png";


function BenefitWork() {
  return (
    <section className="benefit-work">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 text-center">
            <h2 className="mb-3">Benefits of working with us</h2>
            <p>We offer competitive salaries, but we do so much more for our people to help them become their best selves.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-6 mb-3">
            <div className="benefitcards">
              <img src={growth} alt="growth" className="img-fluid" />
              <h3 className="mb-3 mt-3">Professional Growth</h3>
              <p>we offer you the opportunity to leverage our resources to grow and excel<br/>in your career</p>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="benefitcards">
              <img src={user} alt="growth" className="img-fluid" />
              <h3 className="mb-3 mt-3">Community</h3>
              <p>Nothing beats a supportive environment. In Stackivy, you have a community of like minds willing to help you become the best version of your professional career.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-6 mb-3">
            <div className="benefitcards">
              <img src={work} alt="growth" className="img-fluid" />
              <h3 className="mb-3 mt-3">Work-Life Balance</h3>
              <p>Your work-life balance matters to us; we ensure nothing impacts it<br/>while you are with us.</p>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="benefitcards">
              <img src={free} alt="growth" className="img-fluid" />
              <h3 className="mb-3 mt-3">Free Access</h3>
              <p>While working with us, you have free access to all our financial tools, ensuring your financial freedom is also in play.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default BenefitWork;
