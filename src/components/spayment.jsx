import sp from "../assets/sp.svg";
import scan from "../assets/scan.png";


function SPayment() {
  return (
    <section className="spayment">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-3">
            <img src={sp} alt="Simplify payments for customers" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4 mt-9">
            <p>By implementing Pomelo into your logistics business, you are giving your customers a chance to experience seamless delivery services.</p>
          </div>
          <div className="col-sm-4">
            <img src={scan} alt="scancode" className="img-fluid w-100" />
          </div>
          <div className="col-sm-4 mt-9">
            <p>With Pomelo, your logistics business has a better chance of managing payments to and from clients. Our payment system is transparent, seamless, easy to use, and fast.</p>
            <p className="mt-3">Getting payment from clients doesn't have to be a problem anymore </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SPayment