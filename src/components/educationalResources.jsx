import { Link } from "react-router-dom";
import fin from "../assets/heroimg.svg";


function EducationResources() {
  return (
    <section className="education">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2>Learn From The Best Financial Minds</h2>
            <h6 className="my-5">Make your journey to financial freedom worthwhile with financial education. The best part of financial education on stackivy is that there is always something new to learn. At Stackivy, we have created a range of resources from the best financial minds to fuel your journey, enabling you to expand your knowledge and make informed decisions with your money.</h6>
            <Link
              className="btn btn-primary btn-main rounded-pill px-5 py-4"
              to="" style={{background: "#FB831C"}}
            >
              Start Learning
            </Link>
          </div>
          <div className="col-sm-6 text-end">
            <img src={fin} alt="financial" className="img-fluid w-100" style={{marginTop: "-45px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationResources;
