import results from "../assets/results.svg";
import liner from "../assets/liners.svg";
import ii from "../assets/caseii.png";

function II() {
  return (
    <section className="ii">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img src={results} alt="result" className="img-fluid" />
            <p className="my-5">The results were terrific for Leapsails. They were able to serve their customers better while managing in-house financial challenges more effectively.</p>
            <img src={liner} alt="divider" className="img-fluid w-100" />
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-sm-12">
              <h5>CASE STUDY II</h5>
              <img src={ii} alt="challenges" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-7 text-center">
              <p>Roady is a new delivery company operating in Lagos, Nigeria, with the sole purpose of providing Lagosians with simplified delivery options. In a city where 20 million people are trying to get along but find it challenging due to the sheer size of the city, a simplified delivery service is a welcome reprieve.</p>
              <p>Roady is delivering small items and parcels to individuals and businesses across the city, eliminating the stress factor for customers. However, they face two unique challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default II;
