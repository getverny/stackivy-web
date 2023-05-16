import { Link } from "react-router-dom";
import talk from "../assets/arrow.svg";


function ExplorePotential() {
  return (
    <section className="explorepotential">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="footer-top faq-foot">
              <h4 className="text-white">Explore the Potential of your Start-up<br/>with Stackivy</h4>
              <Link><img src={talk} alt="let-talk" className="img-fluid float-end" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExplorePotential;
