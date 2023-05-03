import { Link } from "react-router-dom";
import icons from "../assets/icons.svg";
import cry from "../assets/cry.svg";



function CryptoHero() {
  return (
    <section className="cryptohero pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <img src={cry} alt="icons" className="img-fluid" />
            <h6 className="my-5 text-white">Trade  and transact with your favorite cryptocurrencies, All on one platform. Zettarh is the home for businesses and people who wish to explore all the best things about digital money.</h6>
            <Link
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to=""
            >
              Start Transacting
            </Link>
          </div>
        </div>
        <div className="row justify-content-center mt-9 ">
          <div className="col-sm-7 text-center">
            <img src={icons} alt="icons" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoHero;
