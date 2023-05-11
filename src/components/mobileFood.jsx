import mobile from "../assets/mobilefood.svg";
import mobilefood from "../assets/mobilefood.png";



function MobileFood() {
  return (
    <section className="mobilefood pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <img src={mobile} alt="Mobile Food" className="img-fluid" />
          </div>
          <div className="col-sm-5">
            <p className="text-white">Nearly is Stackivy's powerful mobile banking platform that allows businesses and customers to send or receive payment. With Stackivy, your business can process payments from customers faster and seamlessly. Are you running a food delivery or catering business? You never have to worry about payment processing failures in bad network areas, giving your business more reach. Explore Nearly Mobile</p>
          </div>
        </div>
        <div className="row mt-9">
          <div className="col">
            <img src={mobilefood} alt="Mobile Food" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileFood