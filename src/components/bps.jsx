import { Link } from "react-router-dom";
import domore from "../assets/bea.svg";


function BPS() {
  return (
    <section className="bps domore">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={domore} alt="domore" className="img-fluid mb-4" />
            <p className="mb-5"> Every customer wants to feel special and heard. With our seamless payment process, we help you make your customers understand how much you value them. Making your customers happy guarantees you will be seeing more of them, which makes us happy.</p>
            <Link
              className="btn btn-primary btn-000 rounded-pill px-5 py-4"
              to=""
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BPS;
