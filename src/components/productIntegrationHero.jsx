import right from "../assets/allproducts.png";
import arrow from "../assets/arrow.png";



function ProductHero() {
  return (
    <section className="product-hero bg-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h2>Our Products + You = <span className="track">Financial Freedom</span></h2>
            <h6 className="mt-5 w-87">Finances can make or break your business, so why not invest in innovative financial products that ensure the success of your business and personal financial goals? Our financial products are comprehensive but simplified and can be tailored to work for your unique financial challenge.</h6>
            <button
              className="btn btn-primary btn-green rounded-pill px-5 py-4 my-5"
              to="" style={{background: 'linear-gradient(117.04deg, #2563EB -13.79%, #35FF49 131.52%)'}}
            >
              Explore Now
            </button>
            <img src={arrow} alt="arrow" className="img-fluid" width={345}/>
          </div>
          <div className="col-sm-6">
            <img src={right} alt="all-products" className="img-fluid w-100  animate__animated animate__slideInRight animate__fast" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
