import left from "../assets/store.svg";
import right from "../assets/rightstore.svg";
import bold from "../assets/shop.svg";
import { Icon } from '@iconify/react';

function HargonMarket() {
  return (
    <section className="hargon-market">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={bold} alt="store" className="img-fluid mb-3" />
            <h2 className="text-white">Hargon's marketplace</h2>
            <p className="mt-4 mb-5 text-white">On Hargon's digital market, you can buy goods from our partner vendors and pay with ease using the buy now & pay later option. We have simplified it and made it compatible with any purchase on Hargon's digital market. With Hargon, you never have to miss out on what you want.</p>
            <button
              className="btn btn-primary btn-fff rounded-pill px-5 py-4"
              to="" style={{color: "#228922"}}
            >
              <Icon icon="ic:round-shopping-cart" className="me-2 fs-5" /> Shop now
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-5 text-center">
            <img src={left} alt="left" className="img-fluid" />
          </div>
          <div className="col-sm-5 text-center">
            <img src={right} alt="left" className="img-fluid" style={{marginTop: "-65px"}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HargonMarket