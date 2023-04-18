import products from "../assets/products.svg";
import unlocked from "../assets/unlocked.svg";

function Unlocked() {
  return (
    <section className="unlocked bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            {/* <h3>Unlock <span className="outline mx-1">new possibilities</span>in your business with the right financial partner</h3> */}
            <img src={unlocked} alt="unlocked" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h6 className="mt-4 mb-5">By partnering with us at stackivy, you have access to unlimited financial solutions that helps you invest, manage, and scale your resources which gives you the flexibility to innovate and grow your business to your satisfaction.</h6>
            <img src={products} alt="products" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unlocked